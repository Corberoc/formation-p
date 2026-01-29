import { test,expect } from '../POM/Fixtures';
import Homme from '../datasets/category.json';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.URL!)
})

test('formulaire POM Fixtures',{
tag: ['@test'],
}, async ({Practice_Form}) => {
  await Practice_Form.fillform();
  await expect(Practice_Form.submit).toBeVisible();
})
