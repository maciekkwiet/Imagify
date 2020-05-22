const sgMail = require('@sendgrid/mail');
const emailKey = process.env.EMAIL_KEY;

sgMail.setApiKey(emailKey);

const sendWelcomeEmail = async (email, subject, text, html) => {
  try {
    await sgMail.send({
      to: `${email}`,
      from: 'klaragajaszek21@wp.pl',
      subject: `${subject}`,
      text: `${text}`,
      html: `${html}`,
    });
  } catch (ex) {
    console.log('exception' + ex);
  }
};
module.exports = { sendWelcomeEmail };
