fixture("Spreed Test Fixture")
    .page("https://devexpress.github.io/testcafe")

test.page("https://devexpress.github.io/testcafe/example/")
("Set Test Speed Test",async t =>{
    await t
        .setTestSpeed(0.50) //Type: settes that will appear this command: setTestSpeed
        .typeText("#developer-name","Kellen") // Take the value into the field as type = Text
        .click("#macos") // Take the value in the selector after the click
        .click("#submit-button"); // Take the when it is click on the submit button
})

