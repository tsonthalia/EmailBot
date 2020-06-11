const nodemailer = require('nodemailer');
const GSheetReader = require('g-sheets-api');

// NOTE: Google Email Settings need to be changed to allow less secure access
// NOTE: Publish document to web

const auth = {
  user: 'my_email', // your email address
  pass: 'my_password', // your password
}

const options = {
  sheetId: 'google_sheet_id', // google sheet id (can be found between the /d/ and next / of the url)
  sheetNumber: 1,
  returnAllResults: true,
}

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: auth,
});

sendEmail = mailOptions => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
}

GSheetReader(options, results => {
  for (var result of results) {
    var mailOptions = {
      from: auth.user,
      to: result.email,
      subject: 'Sending email with nodemailer',
      html: `<p>Hello ${result.firstname}, <br><br>You work at ${result.company}<p>`,  // email text
    }

    sendEmail(mailOptions);
  }
})
