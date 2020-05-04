class ModalWindow extends HTMLElement {
  connectedCallback() {
    this.renderButton();
    const registerForm = document.createElement('app-registrationform');
    const loginForm = document.createElement('app-loginform');

    this.loginOrSignButton = this.querySelector('.beginButton').addEventListener('click', () => {
      this.renderModal();
      const modal = this.querySelector('.modal');
      modal.appendChild(loginForm);
      this.closeModal = this.querySelector('.pickClose').addEventListener('click', () => {
        this.renderButton();
      });
      this.registerButton = this.querySelector('.registerButton').addEventListener('click', () => {
        this.renderRegister();
        const registerModal = this.querySelector('.registerModal');
        registerModal.appendChild(registerForm);
        this.closeButton = this.querySelector('.closeRegister').addEventListener('click', () => {
          this.renderModal();
          const modal = this.querySelector('.modal');
          modal.appendChild(loginForm);
          this.closeRegister = this.querySelector('.pickCloseRegister').addEventListener('click', () => {
            //console.log(this);
            this.renderButton();
          });
        });
      });
    });
  }
  renderRegister() {
    this.innerHTML = `
  <div class="modal-bg"> 
    <div class="registerModal">
      <div class="ui big button closeRegister">
        <i class="user icon"></i>
        Login
      </div>
  </div>
`;
  }
  renderButton() {
    this.innerHTML = `
    <div class="ui big button beginButton">
      <i class="user icon"></i>
      Login or Sign Up
    </div>`;
  }

  renderModal() {
    this.innerHTML = `
    <div class="modal-bg"> 
      <div class="modal">
        <label></label>
        <div class="ui big button registerButton">
          <i class="user icon"></i>
          Create an account
        </div>
      </div>
    </div>
  `;
  }
}
export default ModalWindow;
