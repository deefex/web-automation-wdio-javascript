let expect = require('chai').expect;
let BrokenImagesPage = require('../pageobjects/broken_images_page');

describe('Broken Images: https://the-internet.herokuapp.com/broken_images', function() {

    it('check that the page has one or more broken images', function() {
        BrokenImagesPage.open();

        // Try and execute this in the browser to see if we can get back images to iterate over.
        let brokenImages = browser.execute(function () {
            let imgs =  document.getElementsByTagName('img');
	        for (let i = 0; i < imgs.length; i++) {
	            // Iterate over the images - if any of them have natural widths or heights == 0 return true
		        if (imgs[i].naturalHeight == 0 || imgs[i].naturalWidth == 0) {
			        return true;
		        }
	        }
	        // All the images have non-zero naturalWidths/naturalHeights?
	        return false;
        });

        expect(brokenImages.value).to.equal(true);
    });

});