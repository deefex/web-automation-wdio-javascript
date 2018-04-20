let expect = require('chai').expect;
let DynamicLoadingPage1 = require('../pageobjects/dynamic_loading_page_1');

describe('Dynamic Loading 1: https://the-internet.herokuapp.com/dynamic_loading/1', function() {

	it('check that the -Hello World!- message exists by default', function() {
		DynamicLoadingPage1.open();
		expect(DynamicLoadingPage1.message).to.exist;
	});

	it('check that the -Hello World!- message is NOT visible by default', function() {
		DynamicLoadingPage1.open();
		expect(DynamicLoadingPage1.message.isVisible()).to.equal(false);
	});

	it('when I click on the Start button, the -Hello World!- message becomes visible', function() {
		DynamicLoadingPage1.open();
		DynamicLoadingPage1.startButton.click();
		DynamicLoadingPage1.message.waitForVisible();
		expect(DynamicLoadingPage1.message.isVisible()).to.equal(true);
	});

});