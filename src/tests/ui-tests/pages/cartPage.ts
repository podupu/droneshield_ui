import { Page } from "@playwright/test";

export class CartPage {
  private page: Page;
  private cartLink = ".shopping_cart_link";
  private checkoutButton = "#checkout";

  constructor(page: Page) {
    this.page = page;
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
  async removeFirstItemFromCart() {
    await this.page.locator('.cart_list .cart_item .btn_secondary').first().click();
  }
}
