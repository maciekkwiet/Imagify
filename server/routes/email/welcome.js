const sgMail = require('@sendgrid/mail');
const emailKey = process.env.EMAIL_KEY;
const view = require('../index');

sgMail.setApiKey(emailKey);

const sendWelcomeEmail = (email, subject, text, html) => {
  sgMail.send({
    to: email,
    from: 'noreply@imagyfy',
    subject: `${subject}`,
    text: `${text}`,
    html: `${html}`,
  });
  // console.log('sendWelcom email' + email);
  // console.log('sendWelcom email' + subject);
  // console.log('sendWelcom email' + text);
  // console.log('sendWelcom email' + html);
};
module.exports = { sendWelcomeEmail };
