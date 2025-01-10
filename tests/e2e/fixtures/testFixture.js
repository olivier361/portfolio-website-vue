/* eslint-env node */
// The above ESLint rule lets ESLint know using
// "process.env" is allowed in this current context

import { test as base } from '@playwright/test';

// TODO: remove this previous attempt

// // Custom test fixture
// export const test = base.extend({
//   context: async ({ browser }, use) => {
//     const context = await browser.newContext();

//     // Wrap the context's newPage method to add headers conditionally
//     context.newPage = async () => {
//       const page = await context.newPage();
      
//       // Listen for page navigations
//       page.on('request', request => {
//         const url = request.url();
//         console.log('I am here!');
//         if (url.includes('https://ADD_PROD_URL_HERE')) {
//           request.continue({
//             headers: {
//               ...request.headers(),
//               // 'CF-Access-Client-Id': process.env.CF_CLIENT_ID,
//               // 'CF-Access-Client-Secret': process.env.CF_CLIENT_SECRET,
//               'CF-Access-Client-Id': 'ADD_CF_CLIENT_ID',
//               'CF-Access-Client-Secret': 'ADD_CF_CLIENT_SECRET',
//             }
//           });
//         } else {
//           request.continue();
//         }
//       });

//       await page.setRequestInterception(true);
//       return page;
//     };

//     await use(context);
//   }
// });


// This Playwright test fixture extends the behaviour of { test } from '@playwright/test'
// to intercept any page.goto() requests in all our tests. If the specific request goes to our protected prod and staging sites,
// the fixture adds the needed authentication headers in the GET request to gain access to the site.
// If the page.goto() request goes to another site, we don't add the headers to avoid leaking them to a 3rd party.
// 
// For this fixture to take effect in our test files, we need to import
// { test } from './fixtures/testFixture.js' instead of { test } from '@playwright/test'.
// This shouldn't cause any issues as our fixture extends '@playwright/test' so it includes
// all the existing functionality we expect in addition to our own add-ons below.
// 
// DOCS: https://playwright.dev/docs/test-fixtures
export const test = base.extend({
  page: async ({ page }, use) => {
    const globPattern = '**/' + process.env.TRUNCATED_STAGING_URL + '/**';
    await page.route(globPattern, async route => {
        // Add auth headers to our GET requests
        // if the requested route matches the above pattern.
        const headers = route.request().headers();
        headers['CF-Access-Client-Id'] = process.env.CF_ACCESS_CLIENT_ID;
        headers['CF-Access-Client-Secret'] = process.env.CF_ACCESS_CLIENT_SECRET;
        await route.continue({ headers });
      });

      await use(page);
  },
});