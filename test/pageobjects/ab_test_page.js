let Page = require('./page');

let abTestPage = Object.create(Page, {

    // Page object elements
    pageHeading:      { get: function () { return $('h3'); } },
    pageHeadingText:  { get: function () { return $('h3').getText(); } },

    // Define or overwrite page methods
    open:   {
      value: function () {
        Page.open.call(this, 'abtest');
        this.waitForPageToLoad();
      }
    },

    waitForPageToLoad: { value: function() {
      this.pageHeading.waitForDisplayed(undefined, false, "abTestPage: Mandatory element not found.");
    } },

});

module.exports = abTestPage;
