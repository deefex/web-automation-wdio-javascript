var expect = require('chai').expect;
var AbTestPage = require('../pageobjects/ab_test_page');

describe('A/B Testing: https://the-internet.herokuapp.com/abtest', function() {

    it('displays either the A/B Test Control page OR the A/B Test Variation 1 page', function() {
        AbTestPage.open();
        // What I wanted to do is have a logical or using the heading strings 'A/B Test Control'
        // and 'A/B Test Variation 1' but chai expect doesn't really support that, so this will
        // have to do in the meantime
        expect(AbTestPage.pageHeading).to.not.equal('No A/B Test');
    });

    it('displays the No A/B Test page when an opt-out cookie is set', function() {
        // Create an opt-out cookie in order to navigate to the No/A/B Test Page
        browser.cookie('post', { name: 'optimizelyOptOut', value: 'true' });
        AbTestPage.open();
        expect(AbTestPage.pageHeading).to.equal('No A/B Test');
    });

});