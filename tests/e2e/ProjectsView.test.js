import { expect } from '@playwright/test';
import { test } from './fixtures/testFixture.js';

test.describe('ProjectsView - E2E Tests', () => {

  // SKIPPED: Because we currently have placeholder images on the project page
  // which are randomly chosen on each load, we cannot match image snapshots properly.
  test.skip('ProjectsView page should match image snapshot', async ({ page }) => {
    // TODO: re-enable this test once we have real non-random images.
    // ALTERNATIVE FIX: use "toHaveScreenshot({mask})" to cover images with a colored box.

    test.setTimeout(60000);
    await page.goto('/projects');
    await expect(page).toHaveScreenshot({fullPage: true, timeout: 60000});
  });

  test('ProjectsView page top should match image snapshot', async ({ page }) => {
    await page.goto('/projects');
    await expect(page).toHaveScreenshot({timeout: 30000});
  });

  // This test was created with Playwright CodeGen and minor manual edits.
  // SEE: https://playwright.dev/docs/codegen-intro
  test('ProjectCard should open on view details button click', async ({ page }) => {
    await page.goto('/projects');

    // open the card from the top button
    await page.locator('.expand-button').first().click();

    await expect(page.getByRole('heading', { name: 'Project Title 1' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'A screenshot of a colorful 16' }).nth(1)).toBeVisible();
    await expect(page.getByRole('button', { name: '▲ Close Details ▲' }).first()).toContainText('▲ Close Details ▲');
    await expect(page.getByRole('button', { name: '▲ Close Details ▲' }).nth(1)).toContainText('▲ Close Details ▲');

    // close the card from the bottom button
    await page.getByRole('button', { name: '▲ Close Details ▲' }).nth(1).click();

    await expect(page.getByRole('button', { name: '▼ View Details ▼' }).first()).toContainText('▼ View Details ▼');
    await expect(page.getByRole('button', { name: '▼ View Details ▼' }).nth(1)).toContainText('▼ View Details ▼');
  });

});
