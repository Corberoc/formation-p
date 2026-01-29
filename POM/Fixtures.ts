import {test as base} from '@playwright/test';
import { PracticeForm } from './PracticeForm';

type Fixtures = {
  Practice_Form: PracticeForm;
};

const test = base.extend<Fixtures>({
  Practice_Form: async ({ page }, use) => {
    await use(new PracticeForm(page));
  },
});

const expect = base.expect;

export { test, expect };
