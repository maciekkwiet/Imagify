import store from '../Store';

class SettingsButton extends HTMLElement {
  connectedCallback() {
    console.log('dupa');
    this.render();
    this.querySelector('div').addEventListener('click', () => this.openModal());
  }

  openModal() {
    const content = this.modalContent;
    store.modal.next({ type: 'OPEN', content });
  }

  //   toggleDisplay() {
  //     this.isLoginOpen = !this.isLoginOpen;
  //     this.render();
  //   }

  render() {
    this.innerHTML = `
    <div class="ui  button settingsButton">
    <i class="tools icon"></i>
    </div>`;
  }

  get modalContent() {
    return `
    <div class="ui tiny modal">
      <app-avatar class="content"></<app-avatar>
    </div>`;
  }
}
export default SettingsButton;
