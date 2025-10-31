/* eslint-env node */
// The above ESLint rule lets ESLint know using
// "process.env" is allowed in this current context

// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// NOTE: Recent versions (~v1.51-v1.56) of Playwright's HTML reporter include a "copy prompt" button
// and an attached "error-context.md" page aria snapshot file in the HTML report for failed tests.
// These can be used with AI tools/LLMs to get help with debugging test failures, however, these
// aria snapshots may leak sensitive information present on the tested web page and provide
// an easy plaintext way to scrape the page's content.
// For this reason, we want to disable this feature when running on CI because the HTML report
// with the aria snapshots is visible in the CI artifacts.
// By setting both
//   1) PLAYWRIGHT_NO_COPY_PROMPT=true (undocumented) env variable (disables the copy prompt button)
//   2) either the "noCopyPrompt" option in the html reporter settings below
//      or the PLAYWRIGHT_HTML_NO_COPY_PROMPT=true env variable (disables the actual page snapshots)
// when running on CI, the page snapshots and AI prompt button are disabled in the HTML report.
// It seems like an oversight in the current Playwright version (v1.56.1) that two separate settings
// are needed to achieve this. Maybe the behavior will be updated in future Playwright versions
// requiring new changes to our config here.
//
// RESOURCES:
// - https://github.com/microsoft/playwright/issues/37438
// - https://playwright.dev/docs/test-reporters#html-reporter
// - https://github.com/microsoft/playwright/blob/release-1.56/packages/playwright/src/index.ts#L671
// - https://github.com/search?q=repo%3Amicrosoft%2Fplaywright%20error-context&type=code

if (process.env.CI) process.env.PLAYWRIGHT_NO_COPY_PROMPT = 'true';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests/e2e',
  testIgnore: '**/tests-examples/**',
  /* The location where image snapshots are saved */
  snapshotPathTemplate: '{testDir}/__snapshots__/{testFilePath}-snapshots/{arg}-{projectName}{ext}',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  /* See comment above regarding "noCopyPrompt" setting on CI */
  reporter: [['html', { noCopyPrompt: !!process.env.CI }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.E2E_URL ?? 'http://localhost:5173',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  /* Automatically run your local dev server before starting the tests.
   * The dev server is only launched if no prod/staging url is given (E2E_URL).
  */
  webServer: process.env.E2E_URL
    ? undefined
    : {
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

