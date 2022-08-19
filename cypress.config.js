const { defineConfig } = require("cypress");



module.exports = defineConfig({
  e2e: {
  projectId: 'h1kex9',
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  //specPattern: "cypress/e2e/examples/BDD/ecommerce.feature",
  baseUrl: 'https://my.coredirection.com/login',
  
  },
  
});
