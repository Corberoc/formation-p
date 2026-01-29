import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/')
})

test('remplir formulaire', async ({ page }) => {
  await page.getByRole('list').getByText('Text Box').click();
  await page.locator('#userName').fill('Galdric');
  await page.locator('#userEmail').fill('galdric.tingaud@student.junia.com');
  await page.locator('#currentAddress').fill('Tingaud');
  await page.locator('#permanentAddress').fill('Lille');
  await page.locator('#submit').click();
})
