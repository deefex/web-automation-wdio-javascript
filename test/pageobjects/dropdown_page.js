let Page = require('./page');

let dropDownPage = Object.create(Page, {

    // Page object elements
    pageHeading:    { get: function () { return $('h3'); } },
    dropdown:       { get: function () { return $('#dropdown'); } },
    defaultText:    { get: function () { return $('#dropdown > option:nth-child(1)').getText(); } },
    option1Text:    { get: function () { return $('#dropdown > option:nth-child(2)').getText(); } },
    option2Text:    { get: function () { return $('#dropdown > option:nth-child(3)').getText(); } },

    // Define or overwrite page methods
    open:   { value: function () {
        Page.open.call(this, 'dropdown');
        this.waitForPageToLoad();
        }
    },

    waitForPageToLoad: { value: function() {
        this.pageHeading.waitForDisplayed(undefined, false, "dropDownPage: Mandatory element not found.");
        }
    }
});

module.exports = dropDownPage;
