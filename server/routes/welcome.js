const sgMail = require('@sendgrid/mail');

const emailKey = process.env.EMAIL_KEY;

console.log(emailKey);

sgMail.setApiKey(emailKey);

const sendWelcomeEmail = (email) => {
  sgMail.send({
    to: email,
    from: 'klaragajaszek21@wp.pl',
    subject: 'Welcome',
    text: `Welcome ${email}`,
    html: `<div style="text-align: center">
    <h1>Welcome ${email} in our application</h1>
    </div>`,
  });
};

const sendResetEmail = (email, url) => {
  sgMail.send({
    to: email,
    from: 'klaragajaszek21@wp.pl',
    subject: 'Reset email',
    text: `Click on the ${url} if you want to reset your email`,
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  });
};

module.exports = { sendWelcomeEmail, sendResetEmail };
