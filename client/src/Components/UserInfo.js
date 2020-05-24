import store from '../Store';
import axios from 'axios';

class UserInfo extends HTMLElement {
  connectedCallback() {
    const token = localStorage.getItem('token');
    if (token) {
      this.getEmail(token);
    } else {
      this.render();
    }
    store.token.subscribe((token) => this.getEmail(token));
  }

  async getEmail(token) {
    try {
      const response = await axios.get('/api/me', {
        headers: {
          'x-auth': `${token}`,
        },
      });
      store.user = response.data.user;
      console.log(store.user);
    } catch (ex) {
      console.error(ex);
      this.render();
    }
    this.render(token);
  }

  render(token) {
    if (!token) {
      this.innerHTML = `<app-loginbutton class="toAction column five wide Images userPlace choose-box"></app-loginbutton>`;
    } else {
      this.innerHTML = `
    <div class="toAction column five wide Images userPlace choose-box">
        <app-settingsbutton></app-settingsbutton>
        <label>${store.user.email}</label>
    </div>`;
    }
  }
}
export default UserInfo;
