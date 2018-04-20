let dragAndDrop = require('html-dnd').codeForSelectors;
let Page = require('./page');

let dragAndDropPage = Object.create(Page, {

	// Page object elements
	column1:     { get: function () { return browser.element('#column-a'); } },
	column2:     { get: function () { return browser.element('#column-b'); } },
	column1Text: { get: function () { return browser.getText('#column-a > header'); } },
	column2Text: { get: function () { return browser.getText('#column-b > header'); } },

	// Define or overwrite page methods
	open:   { value: function () {
			Page.open.call(this, 'drag_and_drop');
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