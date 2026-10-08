// template for Special Offers Page 
import { type Locator, type Page } from '@playwright/test';
// @ts-check
export class SpecialOffersPage {
  readonly page: Page;
  readonly continueButton: Locator;
  readonly url: string;
  constructor(page: Page) {
    this.page = page;
    this.url = 'https://ecommerce-playground.lambdatest.io/index.php?route=product/special';
    this.continueButton = page.getByRole('link', { name: 'Continue', exact: true });
  }
  async clickContinue() {
    await this.continueButton.click();
  }
}