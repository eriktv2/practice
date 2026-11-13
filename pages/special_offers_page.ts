// template for Special Offers Page 
import { expect, type Locator, type Page } from '@playwright/test';
// @ts-check
export class SpecialOffersPage {
  readonly page: Page;
  readonly continueButton: Locator;
  readonly url: string;
  readonly title: regExp; 
  readonly nospecialOfferProductsMessage: Locator;
  constructor(page: Page) {
    this.page = page;
    this.url = 'https://ecommerce-playground.lambdatest.io/index.php?route=product/special';
    this.continueButton = page.getByRole('link', { name: 'Continue', exact: true });
    this.title = /Special Offers/;
    this.nospecialOfferProductsMessage = page.getByRole('heading', { name: 'There are no special offer products to list' });
  }
  async clickContinue() {
    await this.continueButton.click();
  }
  async clickFirstProduct() {
    await this.page.getByPlaceholder('Search For Products').first().click();
  }
  async expectToHaveTitle() {
    await expect(this.page).toHaveTitle(this.title);
  }
}