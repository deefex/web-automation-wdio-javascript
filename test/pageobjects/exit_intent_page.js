let Page = require('./page');

let exitIntentPage = Object.create(Page, {

    // Page object elements
    modal:       { get: function () { return browser.element('#ouibounce-modal'); } },

    // Define or overwrite page methods
    open:   { value: function () {
            Page.open.call(this, 'exit_intent');
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