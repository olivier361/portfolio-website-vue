import { expect } from '@playwright/test';
import { test } from './fixtures/testFixture.js';

test.describe('AboutMeView - E2E Tests', () => {

  test('AboutMeView page should match image snapshot', async ({ page }) => {
    await page.goto('/about-me');
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('AboutMeView should show NavBar', async ({ page }) => {
    await page.goto('/about-me');

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

  test('AboutMeView should show correct page title', async ({ page }) => {
    await page.goto('/about-me');
    await expect(page.getByRole('heading', { name: /About Me/i })).toBeVisible();
  });

  test('AboutMeView should show profile picture', async ({ page }) => {
    await page.goto('/about-me');
    await expect(page.getByRole('img', { name: /profile.+picture/ })).toBeVisible();
    await expect(page.getByRole('img', { name: /profile.+picture/ }))
      .toHaveAttribute('src', /assets\/pixel-profile-picture.*\.png/);
  });

  test('AboutMeView should show content-card with text content', async ({ page }) => {
    await page.goto('/about-me');
    const contentCard = page.locator('.content-card');

    await expect(contentCard).toHaveCount(1);
    await expect(contentCard).toBeVisible();
    await expect(contentCard).toHaveCSS('background-color', 'rgb(35, 35, 35)'); // equals #232323
    await expect(contentCard).toHaveCSS('border-radius', '50px');
    await expect(contentCard).toHaveText(/Computer Science/);
    await expect(contentCard).toHaveText(/consideration\s.+for the end-user experience\./);
    await expect(contentCard).toHaveText(/stay up to date with the projects I'm working on\./);
  });

  test('AboutMeView paragraph should have a link to the contact page', async ({ page }) => {
    await page.goto('/about-me');
    const contentCard = page.locator('.content-card');

    await expect(contentCard.getByRole('link', { name: 'contact page' }))
      .toHaveAttribute('href', '/contact');
  });

  test('AboutMeView should show project CTA button', async ({ page }) => {
    await page.goto('/about-me');

    await expect(page.getByRole('link', { name: 'View All Projects' }))
      .toHaveAttribute('href', '/projects');
  });

  test('AboutMeView should show section buttons', async ({ page }) => {
    await page.goto('/about-me');

    const sectionButtons = page.locator('.section-button-container');

    await expect(sectionButtons.locator('.section-button')).toHaveCount(2);

    const sectionButton1 = page.locator('.section-button').nth(0);

    await expect(sectionButton1).toBeVisible();
    await expect(sectionButton1).toHaveText(/About Me/);
    await expect(sectionButton1).toHaveText(/Get to know more about me/);
    await expect(sectionButton1).toHaveAttribute('href', '/about-me');

    const sectionButton2 = page.locator('.section-button').nth(1);

    await expect(sectionButton2).toBeVisible();
    await expect(sectionButton2).toHaveText(/Contact Me/);
    await expect(sectionButton2).toHaveText(/Think I'd be a good fit for your team or project\?/);
    await expect(sectionButton2).toHaveAttribute('href', '/contact');
  });
});
