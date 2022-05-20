import {Selector,ClientFunction} from 'testcafe';

const developerName = Selector("#developer-name")
const osOption = Selector("#developer-name")
const submitButton = Selector("#submit-button")

const getPageURL = ClientFunction(() => window.location.href)

let vname = "Ralni"

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/")

test("First Test",async t =>{
    await t
        .typeText(developerName,vname) // Take the value into the field as type = Text
        .click(osOption) // Take the value in the selector after the click
        .click(submitButton) // Take the when it is click on the submit button
        .expect(getPageURL()).contains('thank-you');
});

