// @ts-check
import { test, expect } from '@playwright/test';
import { YourStorePage } from '../pages/your_store_page.ts';
import { SpecialOffersPage } from '../pages/special_offers_page.ts';
test.describe('Your Store Site', () => {
  test('has title', async ({ page }) => {
    const yourStorePage = new YourStorePage(page);
    await yourStorePage.gotoYourStorePage();
    await yourStorePage.expectToHaveTitle();
  })
  test('click special link and continue', async ({ page }) => {
    const yourStorePage = new YourStorePage(page); 
    const specialOffersPage = new SpecialOffersPage(page);
    await yourStorePage.gotoYourStorePage();
    await yourStorePage.expectToHaveTitle();
    await yourStorePage.clickSpecialHot();
    await specialOffersPage.expectToHaveTitle();
    if (await specialOffersPage.nospecialOfferProductsMessage.isVisible()) {
       await specialOffersPage.clickContinue();
       await yourStorePage.expectToHaveTitle();
    }
  });
  test('search for special offer product and buy it', async ({ page }) => {
    const yourStorePage = new YourStorePage(page);
    const specialOffersPage = new SpecialOffersPage(page);
    await yourStorePage.gotoYourStorePage();
    await yourStorePage.clickSpecialHot();
    if (await specialOffersPage.nospecialOfferProductsMessage.isVisible()) {
       await specialOffersPage.clickContinue();
       await yourStorePage.expectToHaveTitle();
    }
    else {
       await specialOffersPage.clickFirstProduct();
       //currently there is no special offer product to buy, so we cannot continue with writing this test
    }
  });
}); 