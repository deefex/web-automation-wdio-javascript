let expect = require('chai').expect;
let AbTestPage = require('../pageobjects/ab_test_page');

describe('A/B Testing: https://the-internet.herokuapp.com/abtest', function() {

	it('displays either the A/B Test Control page OR the A/B Test Variation 1 page', function() {
		AbTestPage.open();
		// chai/expect doesn't handle logical OR gracefully, so we'll use a dinky workaround
		// to check whether the page header is one of two possible A/B variants.
		let abVariations = ['A/B Test Variation 1', 'A/B Test Control'];
		expect(abVariations.includes(AbTestPage.pageHeadingText)).to.equal(true);
	});

	it('displays the No A/B Test page when an opt-out cookie is set', function() {
		// Create an opt-out cookie in order to navigate to the No/A/B Test Page
		browser.addCookie({ method: 'post', name: 'optimizelyOptOut', value: 'true' });
		AbTestPage.open();
		expect(AbTestPage.pageHeadingText).to.equal('No A/B Test');
	});

});
