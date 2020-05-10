const welcome = (email) => {
  let subject;
  let text;
  let html;
  subject = `Welcome ${email}`;
  text = 'Welcome';
  html = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet" />
    <script src="https://kit.fontawesome.com/a2e11166ce.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Alatsi&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap" rel="stylesheet">
  
    <style>
      body {
        background-image: url('http://cdn.mcauto-images-production.sendgrid.net/e32786ca039ff722/52f7a7fe-5f34-4320-b461-92d0505b5824/1920x1802.jpg');
        background-size: cover;
      }
  
      main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
  
      section {
        display: flex;
        flex-direction: row;
        width: 100%;
        text-align: center;
        align-items: center;
        justify-content: center;
        align-items: center;
        margin: 5px;
      }
  
      header {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        color: #ffff;
        line-height: 0px;
        margin-bottom: 20px;
      }
  
      .square {
        display: flex;
        color: #ffff;
        text-shadow: 3px 1px #1c11b5;
        background-color: rgb(220, 220, 220, 0.2);
        border: solid #ff0033;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 150px;
        text-align: center;
        text-transform: uppercase;
        font-size: 36px;
        border-radius: 20px 20px 20px 20px;
      }
  
      .image {
        text-shadow: 3px 3px #1c11b5;
        display: flex;
        color: #ffff;
        justify-content: center;
        align-items: center;
        font-size: 100px;
        background-color: rgb(220, 220, 220, 0.2);
        width: 200px;
        height: 150px;
        text-align: center;
        text-transform: uppercase;
        border-radius: 20px 20px 20px 20px;
        margin-right: 10px;
        border: solid #ff0033;
  
      }
  
      h1 {
        font-family: 'Alatsi', sans-serif;
        letter-spacing: 3px;
        font-size: 72px;
        text-shadow: 3px 3px #1c11b5;
        line-height: 0px;
  
      }
  
      h3 {
        font-family: 'Parisienne', sans-serif;
        text-shadow: 2px 1px #ff0033;
        font-size: 36px;
        line-height: 0px;
      }
  
      h4 {
        font-family: 'Alatsi', sans-serif;
        text-shadow: 3px 3px #1c11b5;
        font-size: 32px;
        line-height: 0px;
      }
    </style>
  </head>
  
  <body>
    <header>
      <div>
        <h1>Welcome in Imgify</h1>
      </div>
      <div>
        <h3>We want to share some picture with you</h3>
      </div>
      <div>
        <h4>Thanks for this application you can:</h4>
      </div>
    </header>
    <main>
      <section>
        <div class="image">
          <i class="far fa-clock"></i>
        </div>
        <div class="square"><span>save your time</span></div>
      </section>
      <section>
        <div class="image"><i class="far fa-folder-open"></i></div>
        <div class="square"><span>have your favourities pictures in one folder</span</div> </section> <section>
            <div class="image"><i class="fas fa-globe-africa"></i></div>
            <div class="square"><span>use other website <br> in one place</span></div>
      </section>
    </main>
  
  
  </body>
  
  </html>`;
  return { subject, text, html };
};

const reset = (email) => {
  let url = `http://localhost:12345/api/reset/:${email}`;
  let subject;
  let text;
  let html;
  subject = 'Reset email';
  text = 'Reset email';
  html = `
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset passwort</title>
    <style>
      body {
        background-color: rgb(218, 215, 215)
      }

      header {
        font-size: 16px;
        border-color: rgb(230, 224, 224);
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        width: 500px;
        height: 50px;
        background-color: white;
        margin-bottom: 10px;
        border-radius: 20px 20px 20px 20px;
      }

      .text {
        padding: 15px;
        display: flex;
        height: 250;
        text-align: center;
        justify-content: center;
        font-size: 20px;
        line-height: 30px;

      }

      .button {
        display: flex;
        color: white;
        margin-top: 15px;
        margin-bottom: 15px;
        margin-left: auto;
        margin-right: auto;
        background: linear-gradient(135deg, #6e8efb, #a777e3);
        height: 50px;
        width: 200px;
        border-radius: 8px;
        transition: box-shadow .5s ease, transform .2s ease;
        text-align: center;
        font-size: 20px;
        text-align: center;
        justify-content: center;
        text-decoration: none;
      }

      a {
        text-decoration: none;
        color: White;
      }

      a:hover {

        text-shadow: 3px 1px #1c11b5;
      }

      main {
        display: flex;
        flex-direction: column;
        background-color: #ffff;
        margin-left: auto;
        margin-right: auto;
        width: 500px;
        height: 200px;
        border-radius: 20px 20px 20px 20px;
      }
    </style>
  </head>

  <body>
    <header>
      <h1>Hello !</h1>
    </header>
    <main>
      <div class="text">
        <span>It looks like that you forgot your passwort. <br>
          Don't worry, you can keep on keeping on.<br>
          Please click on Reguest button and change your password.
        </span>
      </div>

      <button class="button"><a href="${url}">Reset my
          password</a></button>

    </main>
    <footer></footer>
  </body>

  </html>`;
  return { subject, text, html };
};

module.exports = { welcome, reset };
