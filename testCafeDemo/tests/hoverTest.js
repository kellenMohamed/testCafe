fixture(`Hover Fixture`)
.page("https://devexpress.github.io/testcafe/example/")

test('Hover Test', async t =>{
    await t
    .setTestSpeed(0.02)
    .hover('input#populate');
})