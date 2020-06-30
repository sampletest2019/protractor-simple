// homePageSpec.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'homePageSpec.js', 
        'scheduleFlightSpec.js'],
    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            args: ['start-maximized'] 
        }
      }
  }