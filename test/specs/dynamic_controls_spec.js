let expect = require('chai').expect;
let DynamicControlsPage = require('../pageobjects/dynamic_controls_page');

describe('Dynamic Controls: https://the-internet.herokuapp.com/dynamic_controls', function() {

	// simple calls to waitforExist - assuming config timeout will kick in eventually.

	// Note - this page has changed since the time of writing. The checkbox example actually uses two different
	// checkboxes which seems a bit daft. One above, and one below - I'm sure it wasn't like that originally.
	// The new section with enabling/disabling input fields looks a bit shonky too, with some erratic and
	// non-deterministic behaviour (e.g. two progress bars) so I'm not touching that for now.

	it('check that the checkbox appears by default on page load', function() {
		DynamicControlsPage.open();
		expect(DynamicControlsPage.checkbox1.isDisplayed()).to.equal(true);
	});

	it('check that the checkbox disappears after clicking the remove button', function() {
		DynamicControlsPage.open();
		DynamicControlsPage.checkboxButton.click();
		DynamicControlsPage.checkboxMessage.waitForExist();
		expect(DynamicControlsPage.checkbox1.isDisplayed()).to.equal(false);   // The checkbox has gone?
	});

	it('check that the checkbox reappears after clicking the add button', function() {
		// Click the Remove button
		DynamicControlsPage.open();
		DynamicControlsPage.checkboxButton.click();
		DynamicControlsPage.checkboxMessage.waitForExist();

		// Click on the (now) Add button
		DynamicControlsPage.checkboxButton.click();
		DynamicControlsPage.checkbox2.waitForExist();
		expect(DynamicControlsPage.checkbox2.isDisplayed()).to.equal(true);   // The checkbox is back?
	});

});
