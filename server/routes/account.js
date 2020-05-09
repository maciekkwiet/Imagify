const sgMail = require('@sendgrid/mail');

const emailKey = process.env.EMAIL_KEY;

sgMail.setApiKey(emailKey);

const sendWelcomeEmail = (email) => {
  sgMail.send({
    to: email,
    from: 'no-reply@imagify.pl',
    subject: 'Welcome',
    text: `Welcome ${email}`,
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  });
};

module.exports = { sendWelcomeEmail };
