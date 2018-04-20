let Page = require('./page');

let brokenImagesPage = Object.create(Page, {

    // Page object elements
    image1:      { get: function () { return browser.element('//*[@id="content"]/div/img[1]'); } },
    image2:      { get: function () { return browser.element('//*[@id="content"]/div/img[2]'); } },
    image3:      { get: function () { return browser.element('//*[@id="content"]/div/img[3]'); } },
    images:      { get: function () { return document.getElementsByTagName('img'); } },

    // Define or overwrite page methods
    open:   { value: function () {
            Page.open.call(this, 'broken_images');
        } }

});

module.exports = brokenImagesPage;