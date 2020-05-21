import axios from 'axios';
import HandleUserInfoToken from './HandleUserInfoToken';

class UserInfo extends HTMLElement {
  async connectedCallback() {
    this.token = window.localStorage.getItem('token');
    this.getEmail();
    this.email = await this.getEmail();
    this.render();
    HandleUserInfoToken(this);
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
    this.innerHTML = `
    <div id="user-info">${this.email}</div>
    `;
  }
}

export default UserInfo;
