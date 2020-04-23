import SearchBar from './Components/SearchBar.js';
import ImageList from './Components/ImageList.js';
import Image from './Components/Image.js';

const setup = () => {
  customElements.define('search-bar', SearchBar);
  customElements.define('image-list', ImageList);
  customElements.define('app-image', Image);
};

window.addEventListener('load', setup);
