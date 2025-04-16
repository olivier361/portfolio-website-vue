import { expect } from '@playwright/test';
import { test } from './fixtures/testFixture.js';

test.describe('HomeView - E2E Tests', () => {

  test('HomeView page should match image snapshot', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('HomeView should show NavBar', async ({ page }) => {
    await page.goto('/');

    const navBar = page.locator('.header');

    // navbar should have website logo
    await expect(navBar.getByRole('img'))
      .toHaveAttribute('src', /assets\/ogg-logo-long.*\.png/);

    // navbar should have 4 key page link items
    await expect(page.locator('.nav-links > a')).toHaveCount(4);

    // navbar should have links to key pages
    await expect(navBar.getByRole('link', { name: 'home' })).toBeVisible();
    await expect(navBar.getByRole('link', { name: 'projects' })).toBeVisible();
    await expect(navBar.getByRole('link', { name: 'about' })).toBeVisible();
    await expect(navBar.getByRole('link', { name: 'contact' })).toBeVisible();
  });

  test('HomeView NavBar links should have correct href', async ({ page }) => {
    await page.goto('/');

    const navBar = page.locator('.header');

    // navbar should have links to correct pages
    await expect(navBar.getByRole('link', { name: 'home' }))
      .toHaveAttribute('href', '/');
    await expect(navBar.getByRole('link', { name: 'projects' }))
      .toHaveAttribute('href', '/projects');
    await expect(navBar.getByRole('link', { name: 'about' }))
      .toHaveAttribute('href', '/about-me');
    await expect(navBar.getByRole('link', { name: 'contact' }))
      .toHaveAttribute('href', '/contact');
  });

  [
    { button: 'projects', link: 'projects', expectedHeader: 'Projects' },
    { button: 'about', link: 'about-me', expectedHeader: 'About Me' },
    { button: 'contact', link: 'contact', expectedHeader: 'Contact' },
  ].forEach(({ button, link, expectedHeader }) => {
    test(`HomeView NavBar link click should go to correct pages - ${button}`, async ({ page }) => {
      const rootUrl = '/';

      await page.goto(rootUrl);

      // click on link and check that the page loads
      await page.locator('.header').getByRole('link', { name: button }).click();
      await expect(page).toHaveURL(rootUrl + link);
      await expect(page.locator('h1')).toHaveText(expectedHeader);
    });
  });

  // This test was created with VS Code Playwright CodeGen and minor manual edits.
  // SEE: https://playwright.dev/docs/getting-started-vscode#generating-tests
  // SEE: https://playwright.dev/docs/codegen-intro
  test('SplashScreen bottom arrow button should scroll down on click', async ({ page }) => {
    const re = /^\s?Check out my work\s?$/;
    await page.goto('/');

    // only github link and bottom arrow visible in viewport at the start
    await expect(page.locator('.splashscreen').getByRole('link', { name: 'GitHub' }))
      .toBeInViewport();
    await expect(page.locator('div').filter({ hasText: re }).getByRole('link'))
      .toBeInViewport();
    await expect(page.getByRole('heading', { name: 'About Me' }))
      .not.toBeInViewport();

    // click bottom arrow
    await page.locator('div').filter({ hasText: re })
      .getByRole('link').click();

    // page should scroll and content below splashscreen
    // is now in viewport while github link is not.
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeInViewport();
    await expect(page.locator('.splashscreen').getByRole('link', { name: 'GitHub' }))
      .not.toBeInViewport();
  });
});

