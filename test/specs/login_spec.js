let expect = require('chai').expect;
let LoginPage = require('../pageobjects/login_page');
let LoginSecurePage = require('../pageobjects/login_secure_page');

describe('Form Authentication: https://the-internet.herokuapp.com/login', function() {

    it('should REFUSE access to the secure area with invalid credentials', function() {
        LoginPage.attemptLogin('invalid_user', 'invalid_password');
        LoginPage.waitForPageToLoad();
        expect(LoginPage.messageText).contains('Your username is invalid!');
    });

    it('should ALLOW access to the secure area with valid credentials', function() {
        LoginPage.attemptLogin('tomsmith', 'SuperSecretPassword!');
        LoginSecurePage.waitForPageToLoad();
        expect(LoginSecurePage.messageText).contains('You logged into a secure area!');
    });

});
