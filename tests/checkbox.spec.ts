import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox')
})

test('check, uncheck', async ({ page }) => {
  await page.getByRole('button', { name: 'Toggle' }).click();
  await page
    .locator('label')
    .filter({ hasText: 'Desktop' })
    .getByRole('img')
    .first()
    .check();

  await expect(
    page
      .locator('label')
      .filter({ hasText: 'Desktop' })
      .getByRole('img')
      .first()
  ).toBeChecked();

  await page
    .locator('label')
    .filter({ hasText: 'Desktop' })
    .getByRole('img')
    .first()
    .uncheck();
})

