import {Selector} from 'testcafe';

const developerName = Selector("#developer-name")
const osOption = Selector("#developer-name")
const submitButton = Selector("#submit-button")

let vname = "Ralni"

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/")

test("First Test",async t =>{
    await t
        .expect(developerName.value).eql('', 'input is empty')
        .typeText(developerName,vname) // Take the value into the field as type = Text
        .expect(developerName.value).contains('R',`input contains "R" letter`)
        .click(osOption) // Take the value in the selector after the click
        .click(submitButton); // Take the when it is click on the submit button
})
