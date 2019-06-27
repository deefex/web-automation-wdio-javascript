let Page = require('./page');

let loginSecurePage = Object.create(Page, {

	// Page object elements
	logoutButton:    { get: function () { return $('a[class="button secondary radius"]'); } },
	message:         { get: function () { return $('#flash'); } },
	messageText:     { get: function () { return $('#flash').getText(); } },

	// Define or overwrite page methods
	waitForPageToLoad: { value: function() {
			this.logoutButton.waitForDisplayed(undefined, false, "loginSecurePage: Mandatory element not found.");
		} },

});

module.exports = loginSecurePage;
