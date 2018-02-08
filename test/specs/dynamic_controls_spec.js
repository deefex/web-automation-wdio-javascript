var expect = require('chai').expect;
var DynamicControlsPage = require('../pageobjects/dynamic_controls_page');

describe('Dynamic Controls: https://the-internet.herokuapp.com/dynamic_controls', function() {

	// simple calls to waitforExist - assuming config timeout will kick in eventually.

	it('check that the checkbox (he he) appears by default on page load', function() {
		DynamicControlsPage.open();
		expect(DynamicControlsPage.checkbox.isVisible()).to.equal(true);
	});

	it('check that the checkbox disappears after clicking the remove button', function() {
		DynamicControlsPage.open();
		DynamicControlsPage.button.click();
		DynamicControlsPage.message.waitForExist();
		expect(DynamicControlsPage.checkbox.isVisible()).to.equal(false);   // The checkbox has gone?
	});

	it('check that the checkbox reappears after clicking the add button', function() {
		// Click the Remove button
		DynamicControlsPage.open();
		DynamicControlsPage.button.click();
		DynamicControlsPage.message.waitForExist();

		// Click on the (now) Add button
		DynamicControlsPage.button.click();
		DynamicControlsPage.checkbox.waitForExist();
		expect(DynamicControlsPage.checkbox.isVisible()).to.equal(true);   // The checkbox is back?
	});

});