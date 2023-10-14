const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "test12",
  e2e: {
    setupNodeEvents(on, config) {

    },
  },
  env: {
    username: 'user',
    password: 'pass'
  },
  chromeWebSecurity: false,
  watchForFileChanges: false,


});
