var Page = require('./page');

var challengingDomPage = Object.create(Page, {

	// Page object elements
	blueButton:     { get: function () { return browser.element('//*[@id="content"]/div/div/div/div[1]/a[1]'); } },
	redButton:      { get: function () { return browser.element('//*[@id="content"]/div/div/div/div[1]/a[2]'); } },
	greenButton:    { get: function () { return browser.element('//*[@id="content"]/div/div/div/div[1]/a[3]'); } },
	table:          { get: function () { return browser.element('//*[@id="content"]/div/div/div/div[2]/table'); } },
	tableRowsId:    { get: function () { return '//*[@id="content"]/div/div/div/div[2]/table/tbody/tr'; } },
	tableColsId:    { get: function () { return '//*[@id="content"]/div/div/div/div[2]/table/tbody/tr[1]/td'; } },
	answerPanel:    { get: function () { return browser.element('//*[@id="canvas"]'); } },

	// Define or overwrite page methods
	open:   { value: function () {
			Page.open.call(this, 'challenging_dom');
		} }
});

module.exports = challengingDomPage;