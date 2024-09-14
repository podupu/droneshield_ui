import { Page } from '@playwright/test';

export class ProductListingPage {
  private page: Page;
  private productNamesLocator = '.inventory_item_name';
  private productPricesLocator = '.inventory_item_price';

  constructor(page: Page) {
    this.page = page;
  }

  async getProductNames() {
    return this.page.locator(this.productNamesLocator).allTextContents();
  }

  async getProductPrices() {
    return this.page.locator(this.productPricesLocator).allTextContents();
  }
}
