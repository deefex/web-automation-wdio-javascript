let Page = require('./page');

let checkboxesPage = Object.create(Page, {

    // Page object elements
    checkbox1:     { get: function () { return browser.element('//*[@id="checkboxes"]/input[1]'); } },
    checkbox2:     { get: function () { return browser.element('//*[@id="checkboxes"]/input[2]'); } },

    // Define or overwrite page methods
    open:   { value: function () {
            Page.open.call(this, 'checkboxes');
        }
    }
});

module.exports = checkboxesPage;