let Page = require('./page');

let basicAuthPage = Object.create(Page, {

	// Page object elements
	pageHeading:	{ get: function () { return $('h3').getText(); } }, // "Basic Auth"
	pageText:			{ get: function () { return $('p').getText(); } },  // "Congratulations! You must have the proper credentials."

	// Define or overwrite page methods
	open:   { value: function () {
			Page.open.call(this, 'basic_auth');
	} }

});

module.exports = basicAuthPage;
