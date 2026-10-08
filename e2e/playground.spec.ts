// @ts-check
import { test, expect } from '@playwright/test';
import { YourStorePage } from '../pages/your_store_page.ts';
import { SpecialOffersPage } from '../pages/special_offers_page.ts';
test.describe('Your Store Site', () => {
  test('has title', async ({ page }) => {
    const yourStorePage = new YourStorePage(page);
    await yourStorePage.gotoYourStorePage();
    await expect(page).toHaveTitle(/Your Store/);
  })
  test('click special link and continue', async ({ page }) => {
    const yourStorePage = new YourStorePage(page); 
    const specialOffersPage = new SpecialOffersPage(page);
    await yourStorePage.gotoYourStorePage();
    await yourStorePage.clickSpecialHot();
    await specialOffersPage.clickContinue();
  });
  test('search for product and buy it', async ({ page }) => {
    const yourStorePage = new YourStorePage(page);
    const specialOffersPage = new SpecialOffersPage(page);
    await yourStorePage.gotoYourStorePage();
    await yourStorePage.clickSpecialHot();
    await specialOffersPage.clickContinue();
    await page.getByPlaceholder('Search For Products').first().click();
  });
}); 