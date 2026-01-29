import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form')
})

test('practice form', async ({ page }) => {
  await page.locator('#firstName').fill('Galdric');
  await page.locator('#lastName').fill('Tingaud');
  await page.getByText('Male', { exact: true }).click();
  await page.locator('#dateOfBirthInput').click();
  await page.getByText('Sports').check();
  await page.locator('#currentAddress').fill('132 rue de la paix');
  await page.locator('#submit').click();

});

