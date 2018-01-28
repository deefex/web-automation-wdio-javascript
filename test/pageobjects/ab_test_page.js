var Page = require('./page');

var abTestPage = Object.create(Page, {

    // Page object elements
    pageHeading:      { get: function () { return browser.getText('h3'); } },

    // Define or overwrite page methods
    open:   { value: function () {
            Page.open.call(this, 'abtest');
        } }

});

module.exports = abTestPage;