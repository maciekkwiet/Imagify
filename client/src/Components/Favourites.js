import axios from 'axios';
class Favourites extends HTMLElement {
  connectedCallback() {
    this.render();
    this.button = this.querySelector('#sub');
    this.url = this.parentElement.getAttribute('src');
    this.button.addEventListener('click', () => {
      this.favourites();
    });
  }
  render() {
    this.innerHTML = `   
  <input type="checkbox" id="sub">
  <label for="sub">
       <heart><i class="fas fa-heart"></i></heart>
       <check><i class="fas fa-check-circle"></i></check>
       <span>Favourite</span>
     </label>
  `;
  }
  async favourites() {
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        `api/favourities/:url`,
        {
          favourites: `${this.url}`,
        },
        { headers: { 'x-auth': token } },
      );
      console.log(response);
    } catch (ex) {
      $('body').toast({
        message: ex.response.data.error,
      });
      console.error(ex);
    }
  }
}
export default Favourites;
