// homePageSpec.js
describe('JetBlue Home Page', function() {

    var homePageTitle = 'Airline Tickets, Flights & Airfare: Book Direct - Official Site | JetBlue'
    var homePageUrl = 'https://www.jetblue.com/'

    it('should have a title', function() {
      browser.get(homePageUrl);
  
      expect(browser.getTitle()).toEqual(homePageTitle);
    });
  });