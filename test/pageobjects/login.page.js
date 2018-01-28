var Page = require('./page');

var loginPage = Object.create(Page, {

    // Page object elements
    loginForm:      { get: function () { return browser.element('#login'); } },
    loginMessage:   { get: function () { return browser.element('#flash'); } },
    usernameField:  { get: function () { return browser.element('#username'); } },
    passwordField:  { get: function () { return browser.element('#password'); } },

    // Define or overwrite page methods
    open:   { value: function () {
        Page.open.call(this, 'login');
    } },

    attemptLogin: { value: function (username, password) {
        this.open();
        this.usernameField.setValue(username);
        this.passwordField.setValue(password);
        this.loginForm.submitForm();
    } }

});

module.exports = loginPage;