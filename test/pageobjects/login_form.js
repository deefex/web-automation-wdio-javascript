let Page = require('./page');

let loginForm = Object.create(Page, {

    // Page object elements
    form:           { get: function () { return browser.element('#login'); } },
    message:        { get: function () { return browser.element('#flash'); } },
    messageText:    { get: function () { return browser.element('#flash').getText(); } },
    username:       { get: function () { return browser.element('#username'); } },
    password:       { get: function () { return browser.element('#password'); } },

    // Define or overwrite page methods
    open:   { value: function () {
        Page.open.call(this, 'login');
    } },

    attemptLogin: { value: function (user, pass) {
        this.open();
        this.username.setValue(user);
        this.password.setValue(pass);
        this.form.submitForm();
    } },

    waitForMessage: { value: function() {
        this.message.waitForExist();
    } }

});

module.exports = loginForm;