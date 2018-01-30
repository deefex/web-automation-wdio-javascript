var Page = require('./page');

var basicAuthPage = Object.create(Page, {

	// Page object elements
	pageHeading:      { get: function () { return browser.getText('h3'); } }, // "Basic Auth"
    pageText:         { get: function () { return browser.getText('p'); } },  // "Congratulations! You must have the proper credentials."

	// Define or overwrite page methods
	open:   { value: function () {
			Page.open.call(this, 'basic_auth');
		} }

});

module.exports = basicAuthPage;