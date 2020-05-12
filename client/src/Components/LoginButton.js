import store from '../Store';

class LoginButton extends HTMLElement {
  connectedCallback() {
    this.render();
    this.querySelector('div').addEventListener('click', () => this.openModal());
  }

  openModal() {
    store.modal.next(this.modalContent);
  }
  toggleDisplay() {
    this.isLoginOpen = !this.isLoginOpen;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="ui big button beginButton">
      <i class="user icon"></i>
      Login or Sign Up
    </div>`;
  }

  get modalContent() {
    return `
    <div class="ui modal">
      <app-loginorregister class="content"></<app-loginorregister>
    </div>`;
  }
}

export default LoginButton;
