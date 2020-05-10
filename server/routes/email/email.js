const sgMail = require('@sendgrid/mail');
const emailKey = process.env.EMAIL_KEY;

sgMail.setApiKey(emailKey);

const sendWelcomeEmail = async (email, subject, text, html) => {
  try {
    console.log(email);

    const x = await sgMail.send({
      to: `${email}`,
      from: 'klaragajaszek21@wp.pl',
      subject: `${subject}`,
      text: `${text}`,
      html: `${html}`,
    });
    console.log('success' + x);
  } catch (ex) {
    console.log('exception' + ex);
    console.log('email: ' + email);
  }
};
module.exports = { sendWelcomeEmail };
