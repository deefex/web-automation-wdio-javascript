var Page = require('./page');

var dropDownPage = Object.create(Page, {

    // Page object elements
    dropdown:       { get: function () { return browser.element('#dropdown'); } },
    defaultText:    { get: function () { return browser.getText('#dropdown > option:nth-child(1)'); } },
    option1Text:    { get: function () { return browser.getText('#dropdown > option:nth-child(2)'); } },
    option2Text:    { get: function () { return browser.getText('#dropdown > option:nth-child(3)'); } },

    // Define or overwrite page methods
    open:   { value: function () {
            Page.open.call(this, 'dropdown');
        }
    }
});

module.exports = dropDownPage;