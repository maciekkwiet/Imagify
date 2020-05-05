const welcome = (email) => {
  let subject;
  let text;
  let html;
  subject = `Welcome ${email}`;
  text = 'Welcome';
  html = 'test';
  return { subject, text, html };
};

const reset = (email, url) => {
  let subject;
  let text;
  let html;
  subject = 'Reset email';
  text = 'Reset email';
  html = 'test';
  return { subject, text, html };
};

module.exports = { welcome, reset };


