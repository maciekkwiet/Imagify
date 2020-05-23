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
    console.log('dupa');
    const token = localStorage.getItem('token');
    if (!this.isChecked) {
      this.addToFavourites(token);
      this.isChecked = !this.isChecked;
    } else {
      (await this.deleteFromFavourites(token)) && (this.isChecked = !this.isChecked);
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
      console.log(response);
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
  deleteFromFavourites(token) {}
}
export default Favourites;
