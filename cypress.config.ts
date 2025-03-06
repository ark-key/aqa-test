import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    base_url_for_api_tests: 'https://jsonplaceholder.typicode.com',
    base_url_for_ui_tests: 'https://www.saucedemo.com',
  },

  e2e: {
    setupNodeEvents(on, config) {},
  },
});
