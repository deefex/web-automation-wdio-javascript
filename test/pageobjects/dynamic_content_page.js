let Page = require('./page');

let dynamicContentPage = Object.create(Page, {

    // Page object elements
    row1Img:  { get: function () { return browser.getAttribute('//*[@id="content"]/div[1]/div[1]/img', 'src'); } },
    row1Txt:  { get: function () { return browser.getText('//*[@id="content"]/div[1]/div[2]'); } },
    row2Img:  { get: function () { return browser.getAttribute('//*[@id="content"]/div[2]/div[1]/img', 'src'); } },
    row2Txt:  { get: function () { return browser.getText('//*[@id="content"]/div[2]/div[2]'); } },

    // Define or overwrite page methods
    open:   { value: function () {
            Page.open.call(this, 'dynamic_content?with_content=static');
        }
    }
});

module.exports = dynamicContentPage;