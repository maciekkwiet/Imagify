import axios from 'axios';
import faker from 'faker';
import store from '../Store';
import $ from 'jquery';
import { switchAll } from 'rxjs/operators';

class UserInfo extends HTMLElement {
  async connectedCallback() {
    this.token = window.localStorage.getItem('token');
    this.getEmail();
    this.email = await this.getEmail();
    this.render();
  }
  async getEmail() {
    const response = await axios.get('/api/me', {
      headers: {
        'x-auth': `${this.token}`,
      },
    });
    return response.data.user.email;
  }
  render() {
    const userPlace = document.querySelector('.userPlace');
    userPlace.innerHTML = `
    <div>${this.email}</div>
    `;
  }
}

export default UserInfo;
