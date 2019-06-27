let Page = require('./page');

let brokenImagesPage = Object.create(Page, {

    // Page object elements
    pageHeading: { get: function () { return $('h3'); } },
    image1:      { get: function () { return $('//*[@id="content"]/div/img[1]'); } },
    image2:      { get: function () { return $('//*[@id="content"]/div/img[2]'); } },
    image3:      { get: function () { return $('//*[@id="content"]/div/img[3]'); } },
    images:      { get: function () { return document.getElementsByTagName('img'); } },

    // Define or overwrite page methods
    open:   { value: function () {
        Page.open.call(this, 'broken_images');
        this.waitForPageToLoad();
    } },

    waitForPageToLoad: { value: function() {
        this.pageHeading.waitForDisplayed(undefined, false, "brokenImagesPage: Mandatory element not found.");
    } },

});

module.exports = brokenImagesPage;
