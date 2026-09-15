import { test, expect } from '@playwright/test';
// @ts-check
test.describe('My eCommerce website', () => {
  test('has title', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await expect(page).toHaveTitle(/Your Store/);
  });
  test('special link', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.getByRole('link', { name: 'Special Hot', exact: true }).click();
    await page.getByRole('link', { name: 'Continue', exact: true }).click();    
  });
  test('search for product and buy it', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.getByRole('link', { name: 'Special Hot', exact: true }).click();
    await page.getByRole('link', { name: 'Continue', exact: true }).click();    
    await page.getByPlaceholder('Search For Products').first().click();
  });
});
