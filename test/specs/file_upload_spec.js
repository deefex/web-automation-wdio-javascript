let expect = require('chai').expect;
let fileUploaderPage = require('../pageobjects/file_upload_page');

describe('File Upload: https://the-internet.herokuapp.com/upload', function() {

    it('I can successfully upload a file via the ChooseFile button', function() {
        fileUploaderPage.open();
        fileUploaderPage.uploadFile();
        expect(fileUploaderPage.uploadedFilesText).to.equal('spider-man.png');
    });

});
