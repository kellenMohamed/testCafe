import {Selector} from 'testcafe';

const iframeName = Selector('iframe#_0_ifr');
const textArea = Selector('body#tinymce.mce-content-body'); //section body - id.className

fixture('Iframe Fixture')
.page('https://the-internet.herokuapp.com/iframe')

test("iFrame test",async t =>{
    await t
        .switchToIframe(iframeName)
        .click(textArea)
        .pressKey('ctrl+a delete') //delete the text into the iframe
        .typeText(textArea,'Hello everyone')
        .expect(textArea.innerText).contains('Hello') // condition to validate
        .switchToMainWindow();

})