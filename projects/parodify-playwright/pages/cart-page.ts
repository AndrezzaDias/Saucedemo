import { Page, expect } from '@playwright/test'

export class CartPage {
  constructor(private page: Page) {}

  async verifyProductInCart(productName: string) {
    const item = this.page.locator('.cart_item').filter({ hasText: productName })
    await expect(item).toBeVisible()
  }

  async proceedToCheckout() {
    await this.page.click('#checkout')
  }
}