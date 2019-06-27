let Page = require('./page');

let checkboxesPage = Object.create(Page, {

    // Page object elements
    pageHeading: 	  { get: function () { return $('h3'); } },
    checkbox1:      { get: function () { return $('//*[@id="checkboxes"]/input[1]'); } },
    checkbox2:      { get: function () { return $('//*[@id="checkboxes"]/input[2]'); } },

    // Define or overwrite page methods
    open:   { value: function () {
        Page.open.call(this, 'checkboxes');
        this.waitForPageToLoad();
        }
    },

    waitForPageToLoad: { value: function() {
        this.pageHeading.waitForDisplayed(undefined, false, "checkboxesPage: Mandatory element not found.");
        }
    },
});

module.exports = checkboxesPage;
