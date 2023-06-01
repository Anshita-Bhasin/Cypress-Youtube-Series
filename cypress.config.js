const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      /*  on('before:browser:launch', (browser = {}, launchOptions) => {
          if (browser.family === 'chromium' && browser.name !== 'electron') {
            launchOptions.args.push("--incognito");
            return launchOptions
          }
        })
  
        on('before:browser:launch', (browser, launchOptions) => {
          if (browser.family === 'chromium') {
            launchOptions.args.push('--disable-logging');
            return launchOptions;
          }
        });
  
  */
    },
  },



  chromeWebSecurity: false,

  watchForFileChanges: false,


});
