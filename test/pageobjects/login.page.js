var Page = require('./page');

var loginPage = Object.create(Page, {

    // Page object elements
    form:       { get: function () { return browser.element('#login'); } },
    flash:      { get: function () { return browser.element('#flash'); } },
    username:   { get: function () { return browser.element('#username'); } },
    password:   { get: function () { return browser.element('#password'); } },

    // Define or overwrite page methods
    open:   { value: function () {
        Page.open.call(this, 'login');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }
});

module.exports = loginPage;