let Page = require('./page');

let dynamicLoadingPage2 = Object.create(Page, {

	// Page object elements
	pageHeading:   { get: function () { return $('h4'); } },
	startButton:   { get: function () { return $('#start > button'); } },
	message:       { get: function () { return $('#finish'); } },


	// Define or overwrite page methods
	open:   { value: function () {
			Page.open.call(this, 'dynamic_loading/2');
			this.waitForPageToLoad();
		}
	},

	waitForPageToLoad: { value: function() {
			this.pageHeading.waitForDisplayed(undefined, false, "dynamicLoadingPage2: Mandatory element not found.");
		}
	}

});

module.exports = dynamicLoadingPage2;
