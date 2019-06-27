let Page = require('./page');

let dynamicControlsPage = Object.create(Page, {

	// Page object elements
	// TODO - Prefer to use XPath selectors here for buttons "//button[contains(.,"Remove")]" but they seem to be
	// TODO - causing syntax errors when used in conjunction with JS $() notation. Investigate later and fix.
	pageHeading:   		{ get: function () { return $('h4'); } },
	// xpathButton:			{ get: function () { return $('//button[contains(.,"Remove")]'); } },
	checkboxButton:  	{ get: function () { return $('button[type="button"]'); } }, // Appalling selector, not unique but 1st instance is the one we want
	checkbox1:      	{ get: function () { return $('input[label="blah"]'); } },
	checkbox2:      	{ get: function () { return $('#checkbox'); } },
	checkboxMessage:	{ get: function () { return $('#message'); } },

	// Define or overwrite page methods
	open:   { value: function () {
			Page.open.call(this, 'dynamic_controls');
			this.waitForPageToLoad();
		}
	},

	waitForPageToLoad: { value: function() {
			this.pageHeading.waitForDisplayed(undefined, false, "dynamicControlsPage: Mandatory element not found.");
		}
	}

});

module.exports = dynamicControlsPage;
