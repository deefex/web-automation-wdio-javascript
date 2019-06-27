let Page = require('./page');

let loginPage = Object.create(Page, {

    // Page object elements
    loginButton:    { get: function () { return $('form button[type="submit"]'); } },
    message:        { get: function () { return $('#flash'); } },
    messageText:    { get: function () { return $('#flash').getText(); } },
    username:       { get: function () { return $('#username'); } },
    password:       { get: function () { return $('#password'); } },

    // Define or overwrite page methods
    open:   { value: function () {
        Page.open.call(this, 'login');
        this.waitForPageToLoad();
    } },

    attemptLogin: { value: function (user, pass) {
        this.open();
        this.username.setValue(user);
        this.password.setValue(pass);
        this.loginButton.click();
    } },

    waitForPageToLoad: { value: function() {
        this.username.waitForDisplayed(undefined, false, "loginPage: Mandatory element not found.");
    } },

});

module.exports = loginPage;
