const sgMail = require('@sendgrid/mail');
const emailKey = process.env.EMAIL_KEY;

sgMail.setApiKey(emailKey);

const sendEmail = async (email, subject, text, html) => {
  try {
    console.log(email);
    await sgMail.send({
      
      to: `${email}`,
      from: 'klaragajaszek21@wp.pl',
      subject: `${subject}`,
      text: `${text}`,
      html: `${html}`,
    });
  } catch (ex) {
    console.log(ex);
  }
};
module.exports = { sendEmail };
