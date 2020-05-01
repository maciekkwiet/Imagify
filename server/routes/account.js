const sgMail = require('@sendgrid/mail');
require('dotenv').config();

// const emailKey = process.env.EMAIL_KEY;

const emailKey = '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';

sgMail.setApiKey(emailKey);

const sendWelcomeEmail = (email) => {
  sgMail.send({
    to: email,
    from: 'klaragajaszek21@wp.pl',
    subject: 'Welcome',
    text: `Welcome ${email}`,
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  });
};
module.exports = { sendWelcomeEmail };
