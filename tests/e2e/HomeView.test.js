import { test, expect } from '@playwright/test';

test.describe('HomeView - E2E Tests', () => {

  test('HomeView should show NavBar', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    // navbar should have website logo
    await expect(page.locator('.header')
      .getByRole('img'))
      .toHaveAttribute('src', '/src/assets/ogg-logo-long.png');

    // navbar should have 4 key page link items
    await expect(page.locator('.nav-links > a')).toHaveCount(4);
    
    // navbar should have links to key pages
    await expect(page.getByRole('link', { name: 'home'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'projects'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'resume'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'about'})).toBeVisible();
  });

  test('HomeView NavBar links should have correct href', async ({ page }) => {
    const rootUrl = 'http://localhost:5173/';

    await page.goto(rootUrl);

    // navbar should have links to correct pages
    await expect(page.getByRole('link', { name: 'home'})).toHaveAttribute('href', '/');
    await expect(page.getByRole('link', { name: 'projects'})).toHaveAttribute('href', '/projects');
    await expect(page.getByRole('link', { name: 'resume'})).toHaveAttribute('href', '/about');
    await expect(page.getByRole('link', { name: 'about'})).toHaveAttribute('href', '/about');
  });

  [
    {button: 'projects', link: 'projects', expectedHeader: 'Projects'},
    {button: 'resume', link: 'about', expectedHeader: 'This is an about page'},
    {button: 'about', link: 'about', expectedHeader: 'This is an about page'}
  ].forEach(({button, link, expectedHeader}) => {
  test(`HomeView NavBar link click should go to correct pages - ${button}`, async ({ page }) => {
    const rootUrl = 'http://localhost:5173/';

    await page.goto(rootUrl);

    // click on link and check that the page loads
    await page.getByRole('link', { name: button}).click();
    await expect(page).toHaveURL(rootUrl + link);
    await expect(page.locator('h1')).toHaveText(expectedHeader);
  });
  });

});

