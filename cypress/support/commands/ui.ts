/// <reference types="cypress" />
// ***********************************************
// Custom commands for ui tests
//
// https://on.cypress.io/custom-commands
// ***********************************************

export interface UILoginProps {
  username: string;
  password: string;
}

Cypress.Commands.add('ui:login', ({ username, password }: UILoginProps) => {
  Cypress.log({
    name: 'login',
    message: `${username}`,
  });
  cy.visit('/');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
  cy.url().should('include', '/inventory.html');
});
