/* eslint-env node */
// The above ESLint rule lets ESLint know using
// "process.env" is allowed in this current context

// @ts-check
import { defineConfig, devices, test as base } from '@playwright/test'; // TODO: remove unused

// TODO: remove previous attempt

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

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests/e2e',
  /* The location where image snapshots are saved */
  snapshotPathTemplate: '{testDir}/__snapshots__/{testFilePath}-snapshots/{arg}-{projectName}{ext}',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.E2E_URL ?? 'http://localhost:5173',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    // TODO: Remove this. This simple setup works but
    // also sends the headers to any site referenced in a test
    // which exposes the secret to a 3rd party.
    // extraHTTPHeaders: {
    //   // 'CF-Access-Client-Id': process.env.CF_CLIENT_ID,
    //   // 'CF-Access-Client-Secret': process.env.CF_CLIENT_SECRET,
    //   'CF-Access-Client-Id': 'ADD_CF_CLIENT_ID',
    //   'CF-Access-Client-Secret': 'ADD_CF_CLIENT_SECRET',
    // }
  },
  /* Automatically run your local dev server before starting the tests.
   * The dev server is only launched if no prod/staging url is given (E2E_URL).
  */
  webServer: process.env.E2E_URL ? undefined : {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 30 * 1000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* configure parameters for playwright test expect statements */
  expect: {
    /* configure parameters for image snapshots/screenshot tests */
    // See docs for available configurations:
    // https://playwright.dev/docs/test-snapshots
    // https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.02,
      // maxDiffPixels: 100,
      stylePath: './tests/__testAssets__/snapshotStyling.css',
      threshold: 0.05,
    },
    timeout: 10000,
  },

});

