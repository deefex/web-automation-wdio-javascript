let Page = require('./page');

let fileUploaderPage = Object.create(Page, {

  // Page object elements
  pageHeading:      { get: function () { return $('h3'); } },
  chooseSelector:   { get: function () { return '#file-upload'; } },
  chooseButton:     { get: function () { return $('#file-upload'); } },
  chooseValue:      { get: function () { return $('#file-upload').getValue(); } },
  uploadButton:     { get: function () { return $('#file-submit'); } },
  uploadedFiles:    { get: function () { return $('#uploaded-files'); } },
  uploadedFilesText:{ get: function () { return $('#uploaded-files').getText(); } },

  // Define or overwrite page methods
  open:   { value: function () {
      Page.open.call(this, 'upload');
      this.waitForPageToLoad();
    } },

  waitForPageToLoad: { value: function() {
      this.pageHeading.waitForDisplayed(undefined, false, "fileUploaderPage: Mandatory element not found.");
    }
  },

  waitForMessage: { value: function() {
      this.uploadedFiles.waitForExist();
    } }

});

module.exports = fileUploaderPage;
