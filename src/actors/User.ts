import { Page } from 'playwright';
import { generateRandomData } from '../utils/RandomData';
import { FormData } from '../models/FormData';

export class User {
  private formData: FormData;

  constructor(private page: Page) {
    const data = generateRandomData();
    this.formData = new FormData(data.firstName, data.lastName, data.email, data.phoneNumber, data.address, data.dateOfBirth);
  }

  get data(): FormData {
    return this.formData;
  }

  static named(name: string, page: Page): User {
    return new User(page);
  }
}
