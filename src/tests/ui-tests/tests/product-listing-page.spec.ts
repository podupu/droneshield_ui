import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { CONFIG } from '../../../config/config';
import productData from '../../../data/data';
import { ProductListingPage } from "../pages/productListingPage";

test('Verify product listing page - Names, Number, and Text', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productListingPage = new ProductListingPage(page);

  await loginPage.navigate();
  await loginPage.login(CONFIG.credentials.username, CONFIG.credentials.password);
  const productNames: string[] = await productListingPage.getProductNames();
  const productCount = productNames.length;
  console.log('Product Count:', productCount);
  expect(productCount).toBe(productData.expectedProductCount);
  productData.expectedProductNames.forEach((name: string, index: number) => {
    expect(productNames[index]).toBe(name);
  });
  const productPrices: string[] = await productListingPage.getProductPrices();
  productPrices.forEach(price => {
    expect(price).toMatch(/^\$\d+\.\d{2}$/);
  });
  console.log('Product Names:', productNames);
});
