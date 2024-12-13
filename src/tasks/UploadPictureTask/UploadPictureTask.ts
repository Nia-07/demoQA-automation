import { PerformsActivities, Task } from '@serenity-js/core';
import { Page } from 'playwright';

export class UploadPictureTask extends Task {
  performAs(actor: PerformsActivities): Promise<void> {
    throw new Error('Method not implemented.');
  }
  constructor(private page: Page, private filePath: string) {
    super("image");
  }

  async perform() {
    await this.page.setInputFiles('#uploadPicture', this.filePath);
  }

  static fromPath(page: Page, filePath: string) {
    return new UploadPictureTask(page, filePath);
  }
}
