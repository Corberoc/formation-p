import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download')
})

test('upload, download', async ({ page }) => {
  await page.locator('#oldSelectMenu').selectOption({label: 'Blue'});
  await page.locator('#cars').selectOption(['Volvo','Saab']);

})