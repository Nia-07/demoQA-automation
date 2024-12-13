import { Actor, Question } from '@serenity-js/core';
import { PageElement, By } from '@serenity-js/web';

export class VerifyPopupText extends Question<Promise<string>> {
    
    private static popupBody = PageElement.located(By.css('.modal-body')).describedAs('popup body');

    constructor(private expectedText: string) {
        super(`Verify if popup contains: "${expectedText}"`);
    }

    static contains(expectedText: string): VerifyPopupText {
        return new VerifyPopupText(expectedText);
    }

    async answeredBy(actor: Actor): Promise<string> {
        const popupText = await VerifyPopupText.popupBody
            .text()
            .answeredBy(actor);

        if (!popupText || !popupText.includes(this.expectedText)) {
            throw new Error(`Expected popup text to contain "${this.expectedText}", but found "${popupText}"`);
        }

        return popupText;
    }
}
