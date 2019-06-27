let dragAndDrop = require('html-dnd').codeForSelectors;
let Page = require('./page');

let dragAndDropPage = Object.create(Page, {

	// Page object elements
	pageHeading: { get: function () { return $('h3'); } },
	column1:     { get: function () { return $('#column-a'); } },
	column2:     { get: function () { return $('#column-b'); } },
	column1Text: { get: function () { return $('#column-a > header').getText(); } },
	column2Text: { get: function () { return $('#column-b > header').getText(); } },

	// Define or overwrite page methods
	open:   { value: function () {
			Page.open.call(this, 'drag_and_drop');
		}
	},

	waitForPageToLoad: { value: function() {
			this.pageHeading.waitForDisplayed(undefined, false, "dragAndDropPage: Mandatory element not found.");
		}
	},

	dragAtoB: { value: function() {
		browser.execute(dragAndDrop, '#column-a', '#column-b');
		}
	},

	dragBtoA: { value: function() {
			browser.execute(dragAndDrop, '#column-b', '#column-a');
		}
	}
});

module.exports = dragAndDropPage;
