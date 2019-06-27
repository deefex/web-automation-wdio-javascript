let Page = require('./page');

let exitIntentPage = Object.create(Page, {

    // Page object elements
    pageHeading: { get: function () { return $('h3'); } },
    modal:       { get: function () { return $('#ouibounce-modal'); } },

    // Define or overwrite page methods
    open:   { value: function () {
            Page.open.call(this, 'exit_intent');
            this.waitForPageToLoad();
        }
    },

    waitForPageToLoad: { value: function() {
            this.pageHeading.waitForDisplayed(undefined, false, "exitIntentPage: Mandatory element not found.");
        }
    },

    showModal: { value: function () {
            browser.execute( function() {
                $('#ouibounce-modal').show();
            })
        }
    }

});

module.exports = exitIntentPage;
