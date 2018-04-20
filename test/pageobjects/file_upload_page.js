let Page = require('./page');

let fileUploaderPage = Object.create(Page, {

  // Page object elements
  chooseSelector:   { get: function () { return '#file-upload'; } },
  chooseButton:     { get: function () { return browser.element('#file-upload'); } },
  chooseValue:      { get: function () { return browser.element('#file-upload').getValue(); } },
  uploadButton:     { get: function () { return browser.element('#file-submit'); } },
  uploadedFiles:    { get: function () { return browser.element('#uploaded-files'); } },
  uploadedFilesText:{ get: function () { return browser.element('#uploaded-files').getText(); } },

  // Define or overwrite page methods
  open:   { value: function () {
      Page.open.call(this, 'upload');
    } },

  waitForMessage: { value: function() {
      this.uploadedFiles.waitForExist();
    } }

});

module.exports = fileUploaderPage;