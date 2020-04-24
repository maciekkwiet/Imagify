import SearchBar from './Components/SearchBar.js';
import ImageList from './Components/ImageList.js';
import './style.scss';

const setup = () => {
  customElements.define('search-bar', SearchBar);
  customElements.define('image-list', ImageList);
};

window.addEventListener('load', setup);
