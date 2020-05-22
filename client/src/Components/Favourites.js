
//import axios from 'axios';

class Favourites extends HTMLElement {
    connectedCallback() {
this.render ();
this.button = this.querySelector("app-favourites");
//this.addEventListener('click', () => this.favourites());
    }
render () {
    this.innerHTML=`   
    <favourites>
    <input type="checkbox" id="sub">
    <label for="sub">
         <heart><i class="fas fa-heart"></i></heart>
         <check><i class="fas fa-check-circle"></i></check>
         <span>Favourite</span>
       </label>
   </favourites>
    `;
}

 /* async favourites () {
      const response = await axios.post (`/api/favourities/${this.url}`, { favourites: `${this.favourites}`,
    })
  }*/
}
export default Favourites;







