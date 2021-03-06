let expect = require('chai').expect;
let BasicAuthPage = require('../pageobjects/basic_auth_page');  // Not actually used (see below)

describe('Basic Auth: https://the-internet.herokuapp.com/basic_auth', function() {

	// webdriverio doesn't support basic auth at the time of writing and there doesn't
	// seem to be a graceful way of doing this so we'll get down and dirty and use literal
	// values to perform the check. Refactor when webdriverio gets its stuff together.

	it('should ALLOW access to the basic auth page with valid credentials', function() {
		browser.url('http://admin:admin@the-internet.herokuapp.com/basic_auth');
		expect(BasicAuthPage.pageHeading).equals('Basic Auth');
		expect(BasicAuthPage.pageText).equals('Congratulations! You must have the proper credentials.');
	});

});
