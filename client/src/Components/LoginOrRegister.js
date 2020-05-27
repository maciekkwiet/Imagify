class LoginOrRegister extends HTMLElement {
  constructor() {
    super();
    this.isLoginOpen = true;
    this.isForgotten = false;
    this.switchDisplay = this.switchDisplay.bind(this);
    this.forgotDisplay = this.forgotDisplay.bind(this);
    this.switchLabel = document.createElement('span');
    this.forgotLabel = document.createElement('span');
    this.switchLabel.addEventListener('click', this.switchDisplay);
    this.forgotLabel.addEventListener('click', this.forgotDisplay);
  }

  connectedCallback() {
    this.render();
    this.appendChild(this.switchLabel);
  }

  forgotDisplay() {
    this.isForgotten = !this.isForgotten; // this.isLoginOpen = !this.isLoginOpen;
    this.render();
  }

  switchDisplay() {
    this.isLoginOpen = !this.isLoginOpen;
    this.render();
  }

  render() {
    this.innerHTML = `
    ${
      this.isLoginOpen
        ? this.isForgotten
          ? '<app-resetpassword>dupa</app-resetpassword>'
          : '<app-loginForm></app-loginForm>'
        : '<app-registrationform></app-registrationform>'
    }
    `;
    this.switchLabel.innerHTML = this.isForgotten
      ? ''
      : this.isLoginOpen
      ? `Don't have account yet? Click here to sign up.`
      : `Already have an account? Click here to sign in.`;
    this.appendChild(this.switchLabel);
    this.forgotLabel.innerHTML = this.isForgotten
      ? ''
      : this.isLoginOpen
      ? `Forgot a password? Click here to reset`
      : ``;
    this.labelPassword = this.querySelector('.labelPassword');
    this.isLoginOpen ? (!this.isForgotten ? this.labelPassword.appendChild(this.forgotLabel) : null) : null;
  }
}

export default LoginOrRegister;
