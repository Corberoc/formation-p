import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.URL!)
})

test('select', async ({ page }) => {
  const inputFichier = page.locator('#uploadFile');
  await inputFichier.setInputFiles("dragon.png");
  await expect(page.locator('text=dragon.png')).toBeVisible();

});

