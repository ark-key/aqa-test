describe('Purchase Flow', () => {
  const verifyCartItems = () => {
    cy.get('[data-test="item-quantity"]').should('contain', 1);
    cy.get('[data-test="inventory-item-name"]').should(
      'contain',
      'Sauce Labs Backpack'
    );
    cy.get('[data-test="inventory-item-price"]').should('contain', '29.99');
  };

  beforeEach(() => {
    cy['ui:login'](Cypress.env('ui').login_credentials.standard_user);
  });

  it('should successfully complete the purchase and show confirmation', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-badge"]').should('contain', 1);
    cy.get('[data-test="shopping-cart-link"]').click();

    cy.url().should('include', '/cart.html');
    verifyCartItems();
    cy.get('[data-test="checkout"]').click();

    cy.url().should('include', '/checkout-step-one.html');
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('5000');
    cy.get('[data-test="continue"]').click();

    cy.url().should('include', '/checkout-step-two.html');
    verifyCartItems();
    cy.get('[data-test="payment-info-value"]').should(
      'contain',
      'SauceCard #31337'
    );
    cy.get('[data-test="shipping-info-value"]').should(
      'contain',
      'Free Pony Express Delivery!'
    );
    cy.get('[data-test="subtotal-label"]').should('contain', '29.99');
    cy.get('[data-test="finish"]').click();

    cy.url().should('include', '/checkout-complete.html');
    cy.get('[data-test="secondary-header"]').should(
      'contain',
      'Checkout: Complete!'
    );
    cy.get('[data-test="complete-header"]').should(
      'contain',
      'Thank you for your order!'
    );
    cy.get('[data-test="back-to-products"]').should('contain', 'Back Home');
  });
});
