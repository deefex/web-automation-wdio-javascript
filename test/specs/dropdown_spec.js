let expect = require('chai').expect;
let DropDownPage = require('../pageobjects/dropdown_page');

describe('Dropdown: https://the-internet.herokuapp.com/dropdown', function() {

    it('the default option in the dropdown is selected by default', function() {
        DropDownPage.open();
        expect(DropDownPage.dropdown.isSelected()).to.equal(false);
    });

    it('the first option can be selected successfully', function() {
        DropDownPage.open();
        DropDownPage.dropdown.selectByValue('1');
        expect(DropDownPage.dropdown.getValue()).to.equal('1');
    });

    it('the second option can be selected successfully', function() {
        DropDownPage.open();
        DropDownPage.dropdown.selectByIndex(2);
        expect(DropDownPage.dropdown.getValue()).to.equal('2');
    });


});