const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
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
    // "proxyServer": false,
    chromeWebSecurity: false,


  },



  chromeWebSecurity: false,

  watchForFileChanges: false,


});
