// ***********************************************************
// support/e2e.ts is processed and
// loaded automatically before test files.
//
// This is a place to put global configuration and
// behavior that modifies Cypress.
//
// https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests#Support-file
// ***********************************************************

import './commands/ui.ts';

// Helper hook to set baseUrl according to test type
// https://docs.cypress.io/app/core-concepts/best-practices#Setting-a-Global-baseUrl
before(() => {
  const apiTestsFilePath = 'cypress/e2e/api';
  const uiTestsFilePath = 'cypress/e2e/ui';
  const testFilePath = Cypress.spec.relative;

  if (testFilePath.startsWith(apiTestsFilePath)) {
    Cypress.config({ baseUrl: Cypress.env('base_url_for_api_tests') });
  } else if (testFilePath.startsWith(uiTestsFilePath)) {
    Cypress.config({ baseUrl: Cypress.env('base_url_for_ui_tests') });
  } else {
    throw new Error(
      `Failed to determine test type by file path!\n\nExpected either "${apiTestsFilePath}" or "${uiTestsFilePath}".\n\nBut got "${testFilePath}".`
    );
  }
});
