// template for Your Store Page 
import { expect, type Locator, type Page } from '@playwright/test';
// @ts-check
export class YourStorePage {
  readonly page: Page;
  readonly specialHotLink: Locator;
  readonly url: string;
  readonly title: regExp;
  readonly searchForProductsButton: Locator; 
  readonly firstProductLink: Locator;
  constructor(page: Page) {
    this.page = page;
    this.url = 'https://ecommerce-playground.lambdatest.io';
    this.specialHotLink = page.getByRole('link', { name: 'Special Hot', exact: true });
    this.title = /Your Store/;
    this.searchForProductsButton = page.getByPlaceholder('Search For Products').first();
    this.firstProductLink = page.locator('css=a:visible[href*="?route=product"]').first();
  }
  async clickSpecialHot() {
    await this.specialHotLink.click();
  }
  async gotoYourStorePage() {
    await this.page.goto(this.url);
  }
  async expectToHaveTitle() {
    await expect(this.page).toHaveTitle(this.title);
  }
  async clickSearchForProductsButton() {
    await this.searchForProductsButton.click();
  }
  async clickFirstProduct() {
    await this.firstProductLink.click();
  }
}