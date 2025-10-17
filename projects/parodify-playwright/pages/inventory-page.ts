import { Page, expect } from '@playwright/test'

export class InventoryPage {
  constructor(private page: Page) {}

  async validateProductDetails(productName: string) {
    const product = this.page.locator('.inventory_item').filter({ hasText: productName })
    await expect(product.locator('.inventory_item_name')).toHaveText(productName)
    await expect(product.locator('.inventory_item_price')).toBeVisible()
    await expect(product.locator('.inventory_item_desc')).toBeVisible()
  }

  async addProductToCart(productName: string) {
    const product = this.page.locator('.inventory_item').filter({ hasText: productName })
    await product.locator('button').click()
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link')
  }
}