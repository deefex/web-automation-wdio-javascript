var expect = require('chai').expect;
var BrokenImagesPage = require('../pageobjects/broken_images_page');

describe('Broken Images: https://the-internet.herokuapp.com/broken_images', function() {

    it('not working yet', function() {
        BrokenImagesPage.open();

        // Try and execute this in the browser to see if we can get back images to iterate over.
        var brokenImages = browser.execute(function () {
            document.getElementsByTagName('img');
        });

        // print the result
        console.log(brokenImages);


    });

});