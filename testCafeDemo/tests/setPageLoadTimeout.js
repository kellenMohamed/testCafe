fixture(`Set page load timeout Fixture`)
    .page("https://devexpress.github.io/testcafe")

test(`Test load timeout`, async t => {
    await t
    .setPageLoadTimeout(0) // amount of time to waits windows load
    .navigateTo("https://devexpress.github.io/testcafe");
})