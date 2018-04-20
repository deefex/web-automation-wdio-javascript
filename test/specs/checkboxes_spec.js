let expect = require('chai').expect;
let CheckboxesPage = require('../pageobjects/checkboxes_page');

describe('Checkboxes: https://the-internet.herokuapp.com/checkboxes', function() {

    it('the first checkbox should be unchecked by default', function() {
        CheckboxesPage.open();
        expect(CheckboxesPage.checkbox1.isSelected()).to.be.equal(false);
    });

    it('the second checkbox should be checked by default', function() {
        CheckboxesPage.open();
        expect(CheckboxesPage.checkbox2.isSelected()).to.be.equal(true);
    });

    it('the first checkbox should be checked after clicking it', function() {
        CheckboxesPage.open();
        CheckboxesPage.checkbox1.click();
        expect(CheckboxesPage.checkbox1.isSelected()).to.be.equal(true);
    });

    it('the second checkbox should be unchecked after clicking it', function() {
        CheckboxesPage.open();
        CheckboxesPage.checkbox2.click();
        expect(CheckboxesPage.checkbox2.isSelected()).to.be.equal(false);
    });

});