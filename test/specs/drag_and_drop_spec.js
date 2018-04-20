let expect = require('chai').expect;
let DragAndDropPage = require('../pageobjects/drag_and_drop_page');

describe('Drag & Drop: https://the-internet.herokuapp.com/drag_and_drop', function() {

	it('I can successfully drag the element from column1 to column2', function() {
		DragAndDropPage.open();
		DragAndDropPage.dragAtoB();
		expect(DragAndDropPage.column1Text).to.equal('B');
	});

	it('I can successfully drag the element from column2 to column1', function() {
		DragAndDropPage.open();
		DragAndDropPage.dragBtoA();
		expect(DragAndDropPage.column2Text).to.equal('A');
	});
});