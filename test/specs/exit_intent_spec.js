let expect = require('chai').expect;
let ExitIntentPage = require('../pageobjects/exit_intent_page');

describe('Exit Intent: https://the-internet.herokuapp.com/exit_intent', function() {

    // The trigger that causes the modal to appear is to move the mouse outside the
    // browser viewport, however it's not possible to perform that action with selenium
    // as all actions are inherently *in* the viewport. Therefore, this test is a bit
    // farcical, since all we're doing is revealing the modal and checking that it's visible

    it('check that the modal is visible', function() {
        ExitIntentPage.open();
        ExitIntentPage.showModal();
        expect(ExitIntentPage.modal.isVisible()).to.equal(true);
    });

});