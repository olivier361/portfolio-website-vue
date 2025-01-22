import { expect } from '@playwright/test';
import { test } from './fixtures/testFixture.js';

test.describe('HomeView - E2E Tests', () => {

  test('HomeView page should match image snapshot', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot({fullPage: true});
  });

  test('HomeView should show NavBar', async ({ page }) => {
    await page.goto('/');

    // navbar should have website logo
    await expect(page.locator('.header')
      .getByRole('img'))
      .toHaveAttribute('src', /assets\/ogg-logo-long.*\.png/);

    // navbar should have 4 key page link items
    await expect(page.locator('.nav-links > a')).toHaveCount(4);
    
    // navbar should have links to key pages
    await expect(page.getByRole('link', { name: 'home'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'projects'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'resume'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'about'})).toBeVisible();
  });

  test('HomeView NavBar links should have correct href', async ({ page }) => {
    await page.goto('/');

    // navbar should have links to correct pages
    await expect(page.getByRole('link', { name: 'home'})).toHaveAttribute('href', '/');
    await expect(page.getByRole('link', { name: 'projects'})).toHaveAttribute('href', '/projects');
    await expect(page.getByRole('link', { name: 'resume'})).toHaveAttribute('href', '/about');
    await expect(page.getByRole('link', { name: 'about'})).toHaveAttribute('href', '/about');
  });

  [
    {button: 'projects', link: 'projects', expectedHeader: 'Projects'},
    {button: 'resume', link: 'about', expectedHeader: 'This is an about page'},
    {button: 'about', link: 'about', expectedHeader: 'This is an about page'},
  ].forEach(({button, link, expectedHeader}) => {
    test(`HomeView NavBar link click should go to correct pages - ${button}`, async ({ page }) => {
      const rootUrl = '/';

      await page.goto(rootUrl);

      // click on link and check that the page loads
      await page.getByRole('link', { name: button}).click();
      await expect(page).toHaveURL(rootUrl + link);
      await expect(page.locator('h1')).toHaveText(expectedHeader);
    });
  });

  // This test was created with VS Code Playwright CodeGen and minor manual edits.
  // SEE: https://playwright.dev/docs/getting-started-vscode#generating-tests
  // SEE: https://playwright.dev/docs/codegen-intro
  test('SplashScreen bottom arrow button should scroll down on click', async ({ page }) => {
    await page.goto('/');

    // only github link and bottom arrow visible in viewport at the start
    await expect(page.getByRole('link', { name: 'GitHub' })).toBeInViewport();
    await expect(page.locator('div').filter({ hasText: /^Check out my work$/ }).getByRole('link')).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Hello from HomeView.vue' })).not.toBeInViewport();

    // click bottom arrow
    await page.locator('div').filter({ hasText: /^Check out my work$/ }).getByRole('link').click();

    // page should scroll and content below splashscreen is now in viewport while github link is not.
    await expect(page.getByRole('heading', { name: 'Hello from HomeView.vue' })).toBeInViewport();
    await expect(page.getByRole('link', { name: 'GitHub' })).not.toBeInViewport();
  });
});

