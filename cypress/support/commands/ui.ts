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

// Login command for ui tests.
// Should use programmatic login without the usage of UI,
// as per https://docs.cypress.io/app/core-concepts/best-practices#Organizing-Tests-Logging-In-Controlling-State.
// But as the website under test has no means to perform api login
// we are performing login through UI.
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
