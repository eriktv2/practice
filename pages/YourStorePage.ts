// template for Your Store Page 
import { type Locator, type Page } from '@playwright/test';
// @ts-check
export class YourStorePage {
  readonly page: Page;
  readonly specialHot: Locator;
  constructor(page: Page) {
    this.page = page;
    this.specialHot = page.getByRole('link', { name: 'Special Hot', exact: true });
  }
  async clickSpecialHot() {
    await this.specialHot.click();
  }
}