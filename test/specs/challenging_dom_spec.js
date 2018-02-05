var expect = require('chai').expect;
var ChallengingDomPage = require('../pageobjects/challenging_dom_page');

describe('Challenging DOM: https://the-internet.herokuapp.com/challenging_dom', function() {

	it('the BLUE button should exist within the DOM', function() {
		ChallengingDomPage.open();
		expect(ChallengingDomPage.blueButton).to.exist;
	});

	it('the RED button should exist within the DOM', function() {
		ChallengingDomPage.open();
		expect(ChallengingDomPage.redButton).to.exist;
	});

	it('the GREEN button should exist within the DOM', function() {
		ChallengingDomPage.open();
		expect(ChallengingDomPage.greenButton).to.exist;
	});

	it('the ANSWER PANEL should exist within the DOM', function() {
		ChallengingDomPage.open();
		expect(ChallengingDomPage.answerPanel).to.exist;
	});

	it('the TABLE should exist within the DOM', function() {
		ChallengingDomPage.open();
		expect(ChallengingDomPage.table).to.exist;
	});

	it('the TABLE should contain 10 rows', function() {
		ChallengingDomPage.open();
		var rows = $$(ChallengingDomPage.tableRowsId);
		expect(rows.length).to.equal(10);
	});

	it('the TABLE should contain 7 rows', function() {
		ChallengingDomPage.open();
		var cols = $$(ChallengingDomPage.tableColsId);
		expect(cols.length).to.equal(7);
	});

});