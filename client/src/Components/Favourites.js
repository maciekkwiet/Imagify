import axios from 'axios';
import $ from 'jquery';

class Favourites extends HTMLElement {
  connectedCallback() {
    this.isChecked = false;
    this.render();
    this.url = this.parentElement.getAttribute('src');
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
        `api/favourities/:url`,
        {
          favourites: `${this.url}`,
        },
        { headers: { 'x-auth': token } },
      );
      return true;
    } catch (ex) {
      $('body').toast({
        message: ex.response.data.error,
      });
      console.error(ex);
      this.isChecked = !this.isChecked;
      this.render();
      return false;
    }
  }

  async deleteFromFavourites(token) {
    try {
      const response = await axios.delete(
        `api/favourities/`,

        { headers: { 'x-auth': token }, data: { url: this.url } },
      );
      return true;
    } catch (ex) {
      $('body').toast({
        message: ex.response.data.error,
      });
      return false;
    }
  }
}
export default Favourites;
