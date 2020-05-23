import store from '../Store';

class Token extends HTMLElement {
  connectedCallback() {
    store.token = localStorage.getItem('token') == null ? null : localStorage.getItem('token');
    this.render();
  }

  render() {
    if (store.token == null) {
      this.innerHTML = `<app-loginbutton class="toAction column five wide Images userPlace choose-box"></app-loginbutton>`;
    } else {
      this.innerHTML = `<app-settingsbutton class="toAction column five wide Images userPlace choose-box"></app-settingsbutton>`;
    }
  }
}
export default Token;
