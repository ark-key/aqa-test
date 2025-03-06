// ***********************************************************
// support/index.d.ts is used to extend Cypress
// types with custom commands and env types.
//
// https://docs.cypress.io/app/tooling/typescript-support#Types-for-Custom-Commands
// ***********************************************************

import type { UILoginProps } from './commands/ui';

interface Env {
  ui: {
    login_credentials: {
      standard_user: {
        username: string;
        password: string;
      };
    };
  };
}

declare global {
  namespace Cypress {
    interface Cypress {
      env(key: 'ui'): Env['ui'];
    }

    interface Chainable {
      'ui:login'(props: UILoginProps): Chainable<void>;
    }
  }
}
