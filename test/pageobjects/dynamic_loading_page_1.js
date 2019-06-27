let Page = require('./page');

let dynamicLoadingPage1 = Object.create(Page, {

	// Page object elements
	pageHeading:   { get: function () { return $('h3'); } },
	startButton:   { get: function () { return $('#start > button'); } },
	message:       { get: function () { return $('#finish'); } },

	// Define or overwrite page methods
	open:   { value: function () {
			Page.open.call(this, 'dynamic_loading/1');
			this.waitForPageToLoad();
		}
	},

	waitForPageToLoad: { value: function() {
			this.pageHeading.waitForDisplayed(undefined, false, "dynamicLoadingPage1: Mandatory element not found.");
		}
	}

});

module.exports = dynamicLoadingPage1;
