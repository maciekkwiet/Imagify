class ModalWindow extends HTMLElement {
  connectedCallback() {
    this.button = document.createElement('app-loginbutton');
    this.registerForm = document.createElement('app-registrationform');
    this.loginForm = document.createElement('app-loginform');
    this.modal = document.createElement('app-modal');
    this.registerButton = document.createElement('app-registerButton');

    this.renderButton();
    this.chooseBox = document.querySelector('.choose-box');
    this.chooseBox.appendChild(this.button);

    this.loginOrSignButton = document.querySelector('.beginButton').addEventListener('click', () => {
      this.renderModal();

      this.registerButtonClick = document.querySelector('.registerButton').addEventListener('click', () => {
        this.renderRegister();
      });
    });
  }

  renderRegister() {
    this.test.removeChild(this.loginForm);
    this.test.removeChild(this.registerButton);
    this.test.appendChild(this.registerForm);
    this.closeRegister = document.querySelector('.pickCloseRegister').addEventListener('click', () => {
      this.renderModal();
    });
  }

  renderButton() {
    this.button.innerHTML = `
    <div class="ui big button beginButton">
      <i class="user icon"></i>
      Login or Sign Up
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
    this.test.appendChild(this.loginForm);
    this.test.appendChild(this.registerButton);
    this.chooseBox.appendChild(this.modal);
    this.closeModal = document.querySelector('.pickClose').addEventListener('click', () => {
      this.chooseBox.removeChild(this.modal);
    });
  }
}
export default ModalWindow;
