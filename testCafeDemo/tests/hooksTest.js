fixture("My Fixture")
    .page("https://devexpress.github.io/testcafe")
    .beforeEach(async t =>{
        await t
            .maximizeWindow()
            .setTestSpeed(0.01)
    })
    .afterEach(async t => {
        await t
            .navigateTo("https://www.google.com")
    });


test
.page("https://devexpress.github.io/testcafe/example/")
("First Test",async t =>{
    await t
        .typeText("#developer-name","Kellen") // Take the value into the field as type = Text
        .click("#macos") // Take the value in the selector after the click
        .click("#submit-button"); // Take the when it is click on the submit button
})

test
.page("https://devexpress.github.io/testcafe/example/")
("Second Test",async t =>{
    await t
        .typeText("#developer-name","Ralni") // Take the value into the field as type = Text
        .click("#macos") // Take the value in the selector after the click
        .click("#submit-button"); // Take the when it is click on the submit button
})
