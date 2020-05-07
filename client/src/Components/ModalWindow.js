class ModalWindow extends HTMLElement {
  connectedCallback() {
    this.button = document.createElement('app-beginButton');
    this.registerForm = document.createElement('app-registrationForm');
    this.loginForm = document.createElement('app-loginForm');
    this.modal = document.createElement('app-modal');
    this.registerButton = document.createElement('app-registerButton');
    this.loginButton = document.createElement('app-loginButton');

    this.renderButton();
    this.chooseBox = document.querySelector('.choose-box');
    this.chooseBox.appendChild(this.button);

    this.loginOrSignButton = document.querySelector('.beginButton').addEventListener('click', () => {
      this.renderModal();
      this.renderLogin();

      this.registerButtonClick = document.querySelector('.registerButton').addEventListener('click', () => {
        this.renderRegister();
      });
    });
  }

  renderRegister() {
    this.renderLoginButton();
    this.test.removeChild(this.loginForm);
    this.test.removeChild(this.registerButton);
    this.test.appendChild(this.registerForm);
    this.test.appendChild(this.loginButton);
    this.closeRegister = document.querySelector('.pickCloseRegister').addEventListener('click', () => {
      this.chooseBox.removeChild(this.modal);
    });
    this.login = document.querySelector('.loginButton').addEventListener('click', () => {
      this.test.removeChild(this.registerForm);
      this.test.removeChild(this.loginButton);
      this.renderLogin();
    });
  }

  renderButton() {
    this.button.innerHTML = `
    <div class="ui big button beginButton">
      <i class="user icon"></i>
      Login or Sign Up
    </div>`;
  }
  renderLoginButton() {
    this.loginButton.innerHTML = `
    <div class="ui big button loginButton">
    <i class="user icon"></i>
    Login
  </div>`;
  }
  renderRegisterButton() {
    this.registerButton.innerHTML = `
    <div class="ui big button registerButton">
      <i class="user icon"></i>
      Create an account
    </div>`;
  }
  renderModal() {
    this.modal.innerHTML = `
    <div class="modal-bg"> 
      <div class="modal modalTest"></div>
    </div>`;

    this.test = this.modal.querySelector('.modalTest');
    this.renderRegisterButton();
    this.chooseBox.appendChild(this.modal);
  }

  renderLogin() {
    this.test.appendChild(this.loginForm);
    this.test.appendChild(this.registerButton);
    this.closeModal = document.querySelector('.pickClose').addEventListener('click', () => {
      this.chooseBox.removeChild(this.modal);
    });
  }
}
export default ModalWindow;
