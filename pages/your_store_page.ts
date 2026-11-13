// template for Your Store Page 
import { expect, type Locator, type Page } from '@playwright/test';
// @ts-check
export class YourStorePage {
  readonly page: Page;
  readonly specialHot: Locator;
  readonly url: string;
  readonly title: regExp; 
  constructor(page: Page) {
    this.page = page;
    this.url = 'https://ecommerce-playground.lambdatest.io';
    this.specialHot = page.getByRole('link', { name: 'Special Hot', exact: true });
    this.title = /Your Store/;
  }
  async clickSpecialHot() {
    await this.specialHot.click();
  }
  async gotoYourStorePage() {
    await this.page.goto(this.url);
  }
  async expectToHaveTitle() {
    await expect(this.page).toHaveTitle(this.title);
  }
}