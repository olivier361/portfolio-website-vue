import { test, expect } from '@playwright/test';

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

});
