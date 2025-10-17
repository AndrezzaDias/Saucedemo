import { test } from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { InventoryPage } from '../pages/inventory-page'
import { CartPage } from '../pages/cart-page'
import { CheckoutPage } from '../pages/checkout-page'
import users from '../fixtures/users.json'

test('Deve realizar uma compra com sucesso', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)
  const cartPage = new CartPage(page)
  const checkoutPage = new CheckoutPage(page)

  const user = users.standardUser
  const productName = 'Sauce Labs Backpack'

  await loginPage.goToLogin()
  await loginPage.login(user.username, user.password)

  await inventoryPage.validateProductDetails(productName)
  await inventoryPage.addProductToCart(productName)
  await inventoryPage.goToCart()

  await cartPage.verifyProductInCart(productName)
  await cartPage.proceedToCheckout()

  await checkoutPage.fillCheckoutForm('Andreza', 'Dias', '12345')
  await checkoutPage.finishOrder()
  await checkoutPage.verifySuccessMessage()
});
