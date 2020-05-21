import axios from 'axios';

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
    this.innerHTML = `
    <div>${this.email}</div>
    `;
  }
}

export default UserInfo;
