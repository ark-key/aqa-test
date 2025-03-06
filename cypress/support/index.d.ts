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
