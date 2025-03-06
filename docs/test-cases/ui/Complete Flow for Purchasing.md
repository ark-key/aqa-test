## Test Title: Complete Flow for Purchasing

### Description:

Verify that user can complete the full product purchasing flow.

### Preconditions:

1. User is logged in
2. User is at `https://www.saucedemo.com/inventory.html`

### Test Steps:

1. Find `Sauce Labs Backpack` product
2. Click `Add to cart`
3. Verify that a badge with number `1` has appeared over shopping cart icon
4. Click on shopping cart icon
5. Verify that user is now at `https://www.saucedemo.com/cart.html`
6. Verify that cart items show correct products, item quantity, and product price
7. Click `Checkout` button
8. Verify that user is now at `https://www.saucedemo.com/checkout-step-one.html`
9. Type first name, last name and postal code
10. Click `Continue` button
11. Verify that user is now at `https://www.saucedemo.com/checkout-step-two.html`
12. Verify that cart items show correct products, item quantity, and product price
13. Verify that Payment and Shipping information is correct
14. Verify that total items price without is correct (without Tax)
15. Click `Finish`

### Expected Results:

- User sees an order confirmation message indicating successful purchase.
