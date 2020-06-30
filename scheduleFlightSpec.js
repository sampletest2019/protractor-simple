// scheduleFlightSpec.js
describe('JetBlue Schedule Flight', function() {

    var homePageTitle = 'Airline Tickets, Flights & Airfare: Book Direct - Official Site | JetBlue'
    var homePageUrl = 'https://www.jetblue.com/'
    var fromAirport = element(by.css('[placeholder = "Where from?"]'));
    var toAirport = element(by.css('[placeholder = "Where to?"]'));
    var roundTrip = element(by.css('[for = "jb-radio-0"]'));
    var oneWayTrip = element(by.css('[for = "jb-radio-1"]'));
    var departureDate = element(by.cssContainingText('id', 'departure-date'));
    var arrivalDate = element(by.cssContainingText('id', 'return-date'));
    var searchButton = element(by.xpath('//jb-booker-air-submit/button[@role="button"]'));

    beforeEach(function() {
        browser.get(homePageUrl);
      });

    it('should have a title', function() {  
      expect(browser.getTitle()).toEqual(homePageTitle);
    });

    it('schedule round trip from New York to Las Vegas', async function(){
      browser.waitForAngular();
      await oneWayTrip.click();
      await fromAirport.click().sendKeys('New York');
      await toAirport.click().sendKeys('Las Vegas');
      await departureDate.sendKeys('12/29/2020');
      await arrivalDate.sendKeys('12/31/2020');
      await searchButton.click();
    }
    );

  });