import { Page } from 'playwright';
import { FormData } from '../../models/FormData';
import { DisableScroll } from '../../interactions/DisableScroll';
import { Actor, PerformsActivities } from '@serenity-js/core/lib/screenplay';
import { getPhoneNumbersFromFile } from '../../utils/PhoneData';
import { Task } from '@serenity-js/core';

export class FillFormTask extends Task{
    performAs(actor: PerformsActivities): Promise<void> {
        throw new Error('Method not implemented.');
      }
  
  constructor(private page: Page, private formData: FormData, private phoneNumber: string) {
    super("pr");
  }

  async perform() {
        await this.page.fill('#firstName', this.formData.firstName);
        await this.page.waitForTimeout(1000);
        await this.page.fill('#lastName', this.formData.lastName);
        await this.page.waitForTimeout(1000);
        await this.page.fill('#userEmail', this.formData.email);
        await this.page.waitForTimeout(1000);
        await this.page.fill('#userNumber', this.phoneNumber);
        await this.page.waitForTimeout(1000); 
        await this.page.fill('#currentAddress', this.formData.address);
        await this.page.waitForTimeout(1000);
        DisableScroll.onPage(this.page); 
        const genderRadioButton = this.page.locator('input#gender-radio-1');
        await genderRadioButton.scrollIntoViewIfNeeded();
        await genderRadioButton.click({ force: true });
        await this.page.waitForTimeout(1000);
        await this.page.fill('#dateOfBirthInput', this.formData.dateOfBirth);
        await this.page.waitForTimeout(1000);
        await this.page.click('#currentAddress-label');
        await this.page.waitForTimeout(1000);
  }



  static with(page: Page, formData: FormData, phoneNumber: string) {
    return new FillFormTask(page, formData, phoneNumber);
  }

}
