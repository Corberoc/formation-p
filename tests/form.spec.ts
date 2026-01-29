import { test, expect } from '@playwright/test';
import {PracticeForm} from '../POM/PracticeForm';


test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form')
})

test('formulaire POM', async ({page}) => {
  const form = new PracticeForm(page);
  await form.fillform();
})
