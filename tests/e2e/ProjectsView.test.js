import { expect } from '@playwright/test';
import { test } from './fixtures/testFixture.js';

test.describe('ProjectsView - E2E Tests', () => {

  test('ProjectsView page should match image snapshot', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('/projects');
    await expect(page).toHaveScreenshot({ fullPage: true, timeout: 60000 });
  });

  test('ProjectsView page top should match image snapshot', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('/projects');
    await expect(page).toHaveScreenshot({ timeout: 600000 });
  });

  // This test was created with Playwright CodeGen and minor manual edits.
  // SEE: https://playwright.dev/docs/codegen-intro
  test('ProjectCard should open on view details button click', async ({ page }) => {
    await page.goto('/projects');

    // open the card from the top button
    await page.locator('.expand-button').first().click();

    await expect(page.getByRole('heading', { name: '2D Platformer Prototype' })).toBeVisible();
    await expect(page.getByRole(
      'img', { name: 'the Unity Editor showing the 2D platformer prototype' }),
    ).toBeVisible();
    await expect(page.getByRole('button', { name: '▲ Close Details ▲' }).first())
      .toContainText('▲ Close Details ▲');
    await expect(page.getByRole('button', { name: '▲ Close Details ▲' }).nth(1))
      .toContainText('▲ Close Details ▲');

    // close the card from the bottom button
    await page.getByRole('button', { name: '▲ Close Details ▲' }).nth(1).click();

    await expect(page.getByRole('button', { name: '▼ View Details ▼' }).first())
      .toContainText('▼ View Details ▼');
    await expect(page.getByRole('button', { name: '▼ View Details ▼' }).nth(1))
      .toContainText('▼ View Details ▼');
  });

});
