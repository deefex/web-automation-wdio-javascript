var expect = require('chai').expect;
var LoginPage = require('../../pageobjects/login.page');

describe('https://the-internet.herokuapp.com/login', function() {

    it('should REFUSE access to the secure area with invalid credentials', function() {
        LoginPage.attemptLogin('invalid_user', 'invalid_password');
        LoginPage.loginMessage.waitForExist();
        expect(LoginPage.loginMessage.getText()).to.contain('Your username is invalid!');
    });

    it('should ALLOW access to the secure area with valid credentials', function() {
        LoginPage.attemptLogin('tomsmith', 'SuperSecretPassword!');
        LoginPage.loginMessage.waitForExist();
        expect(LoginPage.loginMessage.getText()).to.contain('You logged into a secure area!');
    });

});