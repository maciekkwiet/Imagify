import store from '../Store';

class CreatePassword extends HTMLElement {
  connectedCallback() {
    let locationToken = new URL(location.href).searchParams.get('token');
    locationToken && this.openModal();
  }

  openModal() {
    const content = this.modalContent;
    store.modal.next({ type: 'OPEN', content });
  }

  get modalContent() {
    return `
      <div class="ui tiny modal">
        <app-createpasswordform class="content" ></<app-createpasswordform>
      </div>`;
  }
}
export default CreatePassword;
