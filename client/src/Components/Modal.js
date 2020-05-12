import $ from 'jquery';

import store from '../Store';

class Modal extends HTMLElement {
  connectedCallback() {
    this.classList = 'ui dimmer modals page';
    this.modalSubscription = store.modal.subscribe((e) => this.refreshModal(e));
  }

  refreshModal(modalContent) {
    this.innerHTML = modalContent;
    $(`app-modal .ui.modal`).modal('show');
  }

  disconnectedCallback() {
    this.modalSubscription.unsubscribe();
  }
}

export default Modal;
