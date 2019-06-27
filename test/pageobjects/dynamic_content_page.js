let Page = require('./page');

let dynamicContentPage = Object.create(Page, {

    // Page object elements
    pageHeading:    { get: function () { return $('h3'); } },
    row1Img:  { get: function () { return $('//*[@id="content"]/div[1]/div[1]/img').getAttribute('src'); } },
    row1Txt:  { get: function () { return $('//*[@id="content"]/div[1]/div[2]').getText(); } },
    row2Img:  { get: function () { return $('//*[@id="content"]/div[2]/div[1]/img').getAttribute('src'); } },
    row2Txt:  { get: function () { return $('//*[@id="content"]/div[2]/div[2]').getText(); } },

    // Define or overwrite page methods
    open:   { value: function () {
        Page.open.call(this, 'dynamic_content?with_content=static');
        this.waitForPageToLoad();
        }
    },

    waitForPageToLoad: { value: function() {
        this.pageHeading.waitForDisplayed(undefined, false, "dynamicContentPage: Mandatory element not found.");
        }
    }
});

module.exports = dynamicContentPage;
