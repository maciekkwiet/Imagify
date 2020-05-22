const sgMail = require('@sendgrid/mail');
const emailKey = process.env.EMAIL_KEY;

sgMail.setApiKey(emailKey);

const sendWelcomeEmail = (email, subject, text, html) => {
  sgMail.send({
    to: email,
    from: 'noreply@imagyfy',
    subject: `${subject}`,
    text: `${text}`,
    html: `${html}`,
  });
};
module.exports = { sendWelcomeEmail };
