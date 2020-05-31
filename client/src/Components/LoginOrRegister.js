class LoginOrRegister extends HTMLElement {
  constructor() {
    super();
    this.currentWindow;
    this.LOGIN = true;
    this.currentWindow = 'LOGIN';
    this.loginDisplay = this.loginDisplay.bind(this);
    this.forgotDisplay = this.forgotDisplay.bind(this);
    this.loginLabel = document.createElement('span');
    this.forgotLabel = document.createElement('span');
    this.loginLabel.addEventListener('click', this.loginDisplay);
    this.forgotLabel.addEventListener('click', this.forgotDisplay);
  }

  connectedCallback() {
    this.render();
  }

  forgotDisplay() {
    this.currentWindow = 'FORGOTTEN';
    this.render();
  }

  loginDisplay() {
    this.LOGIN = !this.LOGIN;
    if (this.LOGIN) {
      this.currentWindow = 'LOGIN';
    } else {
      this.currentWindow = 'REGISTER';
    }
    this.render();
  }

  render() {
    switch (this.currentWindow) {
      case 'LOGIN':
        this.innerHTML = '<app-loginForm></app-loginForm>';
        this.appendChild(this.loginLabel);
        this.loginLabel.innerHTML = `Don't have account yet? Click here to sign up.`;
        this.querySelector('.labelPassword').appendChild(this.forgotLabel);
        this.forgotLabel.innerHTML = `Forgot a password? Click here to reset`;
        break;
      case 'REGISTER':
        this.innerHTML = '<app-registrationform></app-registrationform>';
        this.appendChild(this.loginLabel);
        this.loginLabel.innerHTML = `Already have an account? Click here to sign in.`;
        break;
      case 'FORGOTTEN':
        this.innerHTML = '<app-resetpassword></app-resetpassword>';
        break;
    }
  }
}

export default LoginOrRegister;
