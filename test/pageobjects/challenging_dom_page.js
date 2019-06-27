let Page = require('./page');

let challengingDomPage = Object.create(Page, {

	// Page object element
	pageHeading: 		{ get: function () { return $('h3'); } },
	blueButton:     { get: function () { return $('//*[@id="content"]/div/div/div/div[1]/a[1]'); } },
	redButton:      { get: function () { return $('//*[@id="content"]/div/div/div/div[1]/a[2]'); } },
	greenButton:    { get: function () { return $('//*[@id="content"]/div/div/div/div[1]/a[3]'); } },
	table:          { get: function () { return $('//*[@id="content"]/div/div/div/div[2]/table'); } },
	tableRowsId:    { get: function () { return '//*[@id="content"]/div/div/div/div[2]/table/tbody/tr'; } },
	tableColsId:    { get: function () { return '//*[@id="content"]/div/div/div/div[2]/table/tbody/tr[1]/td'; } },
	answerPanel:    { get: function () { return $('//*[@id="canvas"]'); } },

	// Define or overwrite page methods
	open:   { value: function () {
		Page.open.call(this, 'challenging_dom');
		this.waitForPageToLoad();
	} },

	waitForPageToLoad: { value: function() {
		this.pageHeading.waitForDisplayed(undefined, false, "challengingDomPage: Mandatory element not found.");
	} },

});

module.exports = challengingDomPage;
