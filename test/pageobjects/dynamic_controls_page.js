var Page = require('./page');

var dynamicControlsPage = Object.create(Page, {

	// Page object elements
	button:        { get: function () { return browser.element('#btn'); } },
	buttonLabel:   { get: function () { return browser.getText('#btn'); } },
	checkbox:      { get: function () { return browser.element('#checkbox'); } },
	message:       { get: function () { return browser.element('#message'); } },


	// Define or overwrite page methods
	open:   { value: function () {
			Page.open.call(this, 'dynamic_controls');
		}
	}
});

module.exports = dynamicControlsPage;