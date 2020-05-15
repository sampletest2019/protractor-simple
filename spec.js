// spec.js
describe('JetBlue App', function() {
    it('should have a title', function() {
      browser.get('https://www.jetblue.com/');
  
      expect(browser.getTitle()).toEqual('Airline Tickets, Flights & Airfare: Book Direct - Official Site | JetBlue');
    });
  });