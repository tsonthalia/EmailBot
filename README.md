# EmailBot
Uses nodemailer and a google sheets document to send out mass emails

## Setup
Convert google email settings to allow less secure access. Can be found [here](https://myaccount.google.com/security).
<br>


Update the auth object so that *user* has your email address and *pass* has your password. For example...
```
const auth = {
  user: 'hello@gmail.com',
  pass: 'hello123',
}
```
Publish document to web. For full steps follow these [instructions](https://github.com/bpk68/g-sheets-api#readme).
<br>
Get the sheet id which can be found between the '/d/' and the next '/' in the url of the google sheets document. Set the sheetID variable to this id. For example...
```
const options = {
  sheetId: '1-CmQumuz5ZiOvINhphEMgfplrJacQhD623RROcOBTAg',
  sheetNumber: 1,
  returnAllResults: true,
}
```
Change `mailOptions.html` to set your email text.
<br>
Run `npm install` in the terminal in the project directory.

## Run
In the terminal, run `node index.js`.
