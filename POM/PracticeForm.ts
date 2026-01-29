import { Locator, Page } from '@playwright/test';
import {faker} from '@faker-js/faker';
import Homme from '../datasets/category.json';

export class PracticeForm {
    firstname : Locator;
    lastname : Locator;
    userEmail : Locator;
    gender : Locator;
    mobile : Locator
    checkbox : Locator;
    currentAddress : Locator;
    submit : Locator;



    constructor(private page: Page) {
        this.firstname = this.page.locator('#firstName');
        this.lastname = this.page.locator('#lastName');
        this.userEmail = this.page.locator('#userEmail');
        this.gender = this.page.getByText(process.env.GENDER!, { exact: true });
        this.mobile = this.page.locator('#userNumber');
        this.checkbox = this.page.getByText('Sports');
        this.currentAddress = this.page.locator('#currentAddress');
        this.submit = this.page.locator('#submit');
    }

  async fillform() {
    await this.firstname.fill(faker.person.firstName());
    //process.env.FIRSTNAME!
    //Homme[0].Homme!.FIRSTNAME);
    await this.lastname.fill(faker.person.lastName());
    await this.userEmail.fill(faker.internet.email());
    // process.env.EMAIL!);
    await this.gender.click();
    await this.mobile.fill(//faker.phone.number()
      Homme[0].Homme!.MOBILE);
    await this.checkbox.check();
    await this.currentAddress.fill(faker.location.streetAddress());
    await this.submit.click();
  }
}
