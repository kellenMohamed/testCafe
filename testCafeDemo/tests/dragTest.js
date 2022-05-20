import {Selector} from 'testcafe';

const triedCheckbox = Selector('label').withText("I have tried TestCafe");
const slider = Selector('#slider');


fixture (`Drag test`)
    .page('https://devexpress.github.io/testcafe/example/')

test(`Drag Test`, async t =>{
    await t
        .setTestSpeed(0.02)
        .click(triedCheckbox)
        .drag(slider,360,0,{offsetX:10,offsetY:10}); // 360 = Inform the position for slider component, 0 = x and y position, and offsetX/offsetY is for the same values x and y
});