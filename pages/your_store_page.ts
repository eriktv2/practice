// template for Your Store Page 
import { type Locator, type Page } from '@playwright/test';
// @ts-check
export class YourStorePage {
  readonly page: Page;
  readonly specialHot: Locator;
  readonly url: string;
  constructor(page: Page) {
    this.page = page;
    this.url = 'https://ecommerce-playground.lambdatest.io/your-store';
    this.specialHot = page.getByRole('link', { name: 'Special Hot', exact: true });
  }
  async clickSpecialHot() {
    await this.specialHot.click();
  }
  async gotoYourStorePage() {
    await this.page.goto(this.url);
  }
}