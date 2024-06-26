const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  videoUploadOnPasses: false,
  video: false,
  trashAssetsBeforeRuns: true,
  defaultCommandTimeout: 10000,

  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
