import store from '../Store';

class LoginButton extends HTMLElement {
  connectedCallback() {
    this.render();
    this.querySelector('div').addEventListener('click', () => this.openModal());
  }

  openModal() {
    const content = this.modalContent;
    store.modal.next({ type: 'OPEN', content });
  }

  toggleDisplay() {
    this.isLoginOpen = !this.isLoginOpen;
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="ui centered grid big button beginButton">
      <i class="ui column user icon"></i>
      <h3> Login or Sign Up </h3> 
    </div>`;
  }

  get modalContent() {
    return `
    <div class="ui tiny modal">
      <app-loginorregister class="content"></<app-loginorregister>
    </div>`;
  }
}

export default LoginButton;
