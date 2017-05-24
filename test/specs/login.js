var expect = require('chai').expect;
var LoginPage = require('../pageobjects/login.page');

describe('The login page', function() {

    it('should allow access with valid credentials', function() {
        LoginPage.open();
        LoginPage.attempt_Login('invalid_user', 'invalid_password');

        expect(LoginPage.flash.getText()).to.contain('Your username is invalid!');
    });

    it('should refuse access with invalid credentials', function() {
        LoginPage.open();
        LoginPage.attempt_Login('tomsmith', 'SuperSecretPassword!');

        LoginPage.flash.waitForExist();
        expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!');
    });

});