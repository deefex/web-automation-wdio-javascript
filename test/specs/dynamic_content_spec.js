var expect = require('chai').expect;
var DynamicContentPage = require('../pageobjects/dynamic_content_page');

describe('Dynamic Content: https://the-internet.herokuapp.com/dynamic_content', function() {

    it('the 1st image in the 1st row is as per the static page settings', function() {
        var ROW1_IMG = 'https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-3.jpg';
        DynamicContentPage.open();
        expect(DynamicContentPage.row1Img).to.equal(ROW1_IMG);
    });

    it('the 1st paragraph in the 1st row is as per the static page settings', function() {
        var ROW1_TXT = 'Accusantium eius ut architecto neque vel voluptatem vel nam eos minus ullam dolores voluptates enim sed voluptatem rerum qui sapiente nesciunt aspernatur et accusamus laboriosam culpa tenetur hic aut placeat error autem qui sunt.';
        DynamicContentPage.open();
        expect(DynamicContentPage.row1Txt).to.equal(ROW1_TXT);
    });

    it('the 1st image in the 2nd row is as per the static page settings', function() {
        var ROW2_IMG = 'https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-6.jpg';
        DynamicContentPage.open();
        expect(DynamicContentPage.row2Img).to.equal(ROW2_IMG);
    });

    it('the 1st paragraph in the 2nd row is as per the static page settings', function() {
        var ROW2_TXT = 'Omnis fugiat porro vero quas tempora quis eveniet ab officia cupiditate culpa repellat debitis itaque possimus odit dolorum et iste quibusdam quis dicta autem sint vel quo vel consequuntur dolorem nihil neque sunt aperiam blanditiis.';
        DynamicContentPage.open();
        expect(DynamicContentPage.row2Txt).to.equal(ROW2_TXT);
    });

});