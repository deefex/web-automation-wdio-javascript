let expect = require('chai').expect;
let DynamicLoadingPage2 = require('../pageobjects/dynamic_loading_page_2');

describe('Dynamic Loading 2: https://the-internet.herokuapp.com/dynamic_loading/2', function() {

	it('check that the -Hello World!- message DOES NOT exist by default', function() {
		DynamicLoadingPage2.open();
		expect(DynamicLoadingPage2.message.isExisting()).to.equal(false);
	});

	it('check that the -Hello World!- message is NOT visible by default', function() {
		DynamicLoadingPage2.open();
		expect(DynamicLoadingPage2.message.isDisplayed()).to.equal(false);
	});

	// I know it seems kinda futile to have separate tests for exists *and* visible
	// as one tends to imply the other, but this is just mucking around with wdio after all

	it('when I click on the Start button, the -Hello World!- message exists', function() {
		DynamicLoadingPage2.open();
		DynamicLoadingPage2.startButton.click();
		DynamicLoadingPage2.message.waitForDisplayed();
		expect(DynamicLoadingPage2.message.isExisting()).to.equal(true);
	});

	it('when I click on the Start button, the -Hello World!- message becomes visible', function() {
		DynamicLoadingPage2.open();
		DynamicLoadingPage2.startButton.click();
		DynamicLoadingPage2.message.waitForDisplayed();
		expect(DynamicLoadingPage2.message.isDisplayed()).to.equal(true);
	});

});
