import $ from 'jquery';

import store from '../Store';

class Modal extends HTMLElement {
  connectedCallback() {
    this.classList = 'ui dimmer modals page';
    this.modalSubscription = store.modal.subscribe((e) => this.handleAction(e));
  }

  handleAction({ type, content }) {
    switch (type) {
      case 'OPEN':
        this.openModal(content);
        break;
      case 'CLOSE':
        this.closeModal();
        break;
    }
  }

  openModal(content) {
    this.innerHTML = content;
    $(`app-modal .ui.modal`).modal('show');
  }

  closeModal() {
    $(`app-modal .ui.modal`).modal('hide');
  }

  disconnectedCallback() {
    this.modalSubscription.unsubscribe();
  }
}

export default Modal;
