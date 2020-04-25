import SearchBar from './Components/SearchBar.js';
import ImageList from './Components/ImageList.js';
import LoginForm from './Components/LoginForm.js';
import './style.scss';

const setup = () => {
  customElements.define('search-bar', SearchBar);
  customElements.define('image-list', ImageList);
  customElements.define('login-form', LoginForm);
};

window.addEventListener('load', setup);
