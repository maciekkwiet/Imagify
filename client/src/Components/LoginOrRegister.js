class LoginOrRegister extends HTMLElement {
  constructor() {
    super();
    this.isLoginOpen = true;
    this.switchDisplay = this.switchDisplay.bind(this);
    this.switchLabel = document.createElement('span');
    this.switchLabel.addEventListener('click', this.switchDisplay);
  }

  connectedCallback() {
    this.render();
    this.appendChild(this.switchLabel);
  }

  switchDisplay() {
    console.log(this);
    this.isLoginOpen = !this.isLoginOpen;
    this.render();
  }

  render() {
    this.innerHTML = `
        ${this.isLoginOpen ? '<app-loginForm></app-loginForm>' : '<app-registrationform></app-registrationform>'}
        <br/>
        <br/>
    `;
    this.switchLabel.innerHTML = this.isLoginOpen
      ? `Don't have account yet? Click here to sign up.`
      : `Already have an account? Click here to sign in.`;
    this.appendChild(this.switchLabel);
  }
}

export default LoginOrRegister;
