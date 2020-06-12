import axios from 'axios';
import $ from 'jquery';
import store from '../Store';

class Favourites extends HTMLElement {
  connectedCallback() {
    this.isChecked = false;
    this.render();
    this.url = this.previousElementSibling.getAttribute('src');
    this.addEventListener('click', () => {
      this.handleClick();
    });
  }

  render() {
    this.innerHTML = `   
      <input type="checkbox" ${this.isChecked ? 'checked' : ''}>
      <label for="sub">
  <heart><i class="fas fa-heart"></i></heart>
   <check><i class="fas fa-check-circle"></i></check>
  <span>Favourite</span> 
</label> 
  `;
  }

  async handleClick() {
    const token = localStorage.getItem('token');
    if (!this.isChecked) {
      this.addToFavourites(token);
      this.isChecked = true;
    } else {
      (await this.deleteFromFavourites(token)) && (this.isChecked = false);
    }
    this.render();
  }

  async addToFavourites(token) {
    try {
      const response = await axios.post(
        `api/favourities/url`,
        {
          url: this.url,
        },
        { headers: { 'auth': token } },
      );
      this.getUser(token);
    } catch (ex) {
      $('body').toast({
        message: ex.response.data.error,
      });
      console.error(ex);
      this.isChecked = !this.isChecked;
      this.render();
    }
  }

  async deleteFromFavourites(token) {
    try {
      const response = await axios.delete(
        `api/favourities/`,

        { headers: { 'auth': token }, data: { 'url': this.url } },
      );
      return true;
    } catch (ex) {
      $('body').toast({
        message: ex.response.data.error,
      });
      return false;
    }
  }

  async getUser(token = null) {
    if (token) {
      try {
        const response = await axios.get('/api/me', {
          headers: {
            'auth': token,
          },
        });
        store.user = response.data.user;
      } catch (ex) {
        console.error(ex);
      }
    }
  }


}
export default Favourites;
