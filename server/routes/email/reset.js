const email = (type,url) => {
  if (type == `reset`) {
    const subject = 'Reset email';
    const text = 'Reset email';
    const html = `<div>Witaj ${email} ! <br/> Aby zresetować konto naciśnij poniższy url i postepuj zgodnie z instrukcją wyświetloną na ekranie <br/> ${url}</div>`;
  } 
  else if (type == 'register') {
    const subject = 'Welcome';
    const text = 'Welcome';
    const html = `<div>Witaj ${email} ! <br/> test </div>`;
  }
};

// const reset = 
// [{
// subject : 'Reset email',
//  text : 'Reset email',
//  html : `<div>Witaj ${email} ! <br/> Aby zresetować konto naciśnij poniższy url i postepuj zgodnie z instrukcją wyświetloną na ekranie <br/> ${url}</div>`
//   }]

//   const welcom = 
// [{
// subject : 'Welcome',
//  text : 'Welcome email',
//  html : `<div>Witaj ${email} ! <br/> test </div>`
//   }]

module.exports = {email};
