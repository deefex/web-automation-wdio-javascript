var expect = require('chai').expect;
var LoginPage = require('../pageobjects/login.page');

describe('The login page', function() {
    it('should allow access with valid credentials', function() {
        LoginPage.open();
        LoginPage.username.setValue('invalid_user');
        LoginPage.password.setValue('invalid_password');
        LoginPage.submit();

        expect(LoginPage.flash.getText()).to.contain('Your username is invalid!');
    });

    it('should refuse access with invalid credentials', function() {
        LoginPage.open();
        LoginPage.username.setValue('tomsmith');
        LoginPage.password.setValue('SuperSecretPassword'); // TODO - Deliberate failure to play with screenshots
        LoginPage.submit();

        LoginPage.flash.waitForExist();
        if (!expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!')) {
            browser.saveScreenshot('./test_fail.png');
        }
    });
});