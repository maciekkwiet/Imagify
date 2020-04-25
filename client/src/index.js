import 'fomantic-ui-css/semantic';
import 'fomantic-ui-css/semantic.css';

import SearchBar from './Components/SearchBar.js';
import ImageList from './Components/ImageList.js';
import LoginForm from './Components/LoginForm.js';
import './style.scss';

const setup = () => {
  customElements.define('app-searchbar', SearchBar);
  customElements.define('app-imagelist', ImageList);
  customElements.define('login-form', LoginForm);
};

window.addEventListener('load', setup);
