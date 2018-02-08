var Page = require('./page');

var dynamicLoadingPage2 = Object.create(Page, {

	// Page object elements
	startButton:   { get: function () { return browser.element('#start > button'); } },
	message:       { get: function () { return browser.element('#finish'); } },


	// Define or overwrite page methods
	open:   { value: function () {
			Page.open.call(this, 'dynamic_loading/2');
		}
	}
});

module.exports = dynamicLoadingPage2;