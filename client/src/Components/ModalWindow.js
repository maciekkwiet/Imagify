class ModalWindow extends HTMLElement {
  connectedCallback() {
    this.renderButton();
    const registerForm = document.createElement('app-registrationform');
    const loginForm = document.createElement('app-loginform');
    this.Button = this.querySelector('.ui.big.button').addEventListener('click', () => {
      this.renderModal();
      this.appendChild(registerForm);
    });
  }
  renderButton() {
    this.innerHTML = `
    <div class="ui big button">
      <i class="user icon"></i>
      Login or Sign Up
    </div>`;
  }
  renderModal() {
    this.innerHTML = `
<div class="ui modal">
  <i class="close icon"></i>
  <div class="header">
    Profile Picture
  </div>
  
  <div class="actions">
    <div class="ui black deny button">
      Nope
    </div>
    <div class="ui positive right labeled icon button">
      Yep, that's me
      <i class="checkmark icon"></i>
    </div>
  </div>
</div>`;
  }
}
export default ModalWindow;
