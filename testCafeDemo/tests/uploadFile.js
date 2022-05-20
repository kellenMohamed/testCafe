import {Selector} from 'testcafe';

const fileUpload = Selector('input#file-upload')
const uploadFileButton = Selector('input#file-submit.button')

Fixture (`File Upload Fixture`)
    .page("https://the-internet.herokuapp.com/upload")

test("File Upload test", async t =>{
    await t
        .setFilesToUpload(photoafternoon,'../../upload/photoafternoon.jpg') // Function to upload files
        .clearUpload(fileUpload)
        .setFilesToUpload(photoafternoon,'../../upload/photoafternoon.jpg')
        .click(uploadFileButton);
});


