let Page = require('./page');

let dynamicLoadingPage1 = Object.create(Page, {

	// Page object elements
	startButton:   { get: function () { return browser.element('#start > button'); } },
	message:       { get: function () { return browser.element('#finish'); } },


	// Define or overwrite page methods
	open:   { value: function () {
			Page.open.call(this, 'dynamic_loading/1');
		}
	}
});

module.exports = dynamicLoadingPage1;