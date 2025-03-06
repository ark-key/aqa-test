describe('Login Functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should successfully log in with valid credentials', () => {
    const { username, password } =
      Cypress.env('ui').login_credentials.standard_user;
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('should display an error message for invalid credentials', () => {
    cy.get('[data-test="username"]').type('invalid_username');
    cy.get('[data-test="password"]').type('invalid_password');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should(
      'contain',
      'Username and password do not match any user in this service'
    );
  });

  it('should mask the password input field', () => {
    cy.get('[data-test="password"]').should('have.attr', 'type', 'password');
  });
});
