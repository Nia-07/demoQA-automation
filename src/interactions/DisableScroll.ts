import { Interaction } from '@serenity-js/core';
import { Page } from 'playwright';
import { Actor } from '@serenity-js/core/lib/screenplay';

export class DisableScroll extends Interaction {
    static onPage(page: Page) {
        return new DisableScroll(page);
    }

    constructor(private page: Page) {
        super('Deshabilitar el desplazamiento en la página');
    }

    async performAs(actor: Actor): Promise<void> {
        await this.page.evaluate(() => {
            window.onscroll = null; 
            window.scrollTo(0, 0); 
           });
    }
}
