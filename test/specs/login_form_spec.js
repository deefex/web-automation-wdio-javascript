var expect = require('chai').expect;
var LoginForm = require('../pageobjects/login_form');

describe('Form Authentication: https://the-internet.herokuapp.com/login', function() {

    it('should REFUSE access to the secure area with invalid credentials', function() {
        LoginForm.attemptLogin('invalid_user', 'invalid_password');
        LoginForm.waitForMessage();
        expect(LoginForm.messageText).contains('Your username is invalid!');
    });

    it('should ALLOW access to the secure area with valid credentials', function() {
        LoginForm.attemptLogin('tomsmith', 'SuperSecretPassword!');
        LoginForm.waitForMessage();
        expect(LoginForm.messageText).contains('You logged into a secure area!');
    });

});