import 'fomantic-ui-css/semantic';
import 'fomantic-ui-css/semantic.css';

import SearchBar from './Components/SearchBar.js';
import ImageList from './Components/ImageList.js';
import './style.scss';
import ApiPicker from './Components/ApiPicker.js';

const setup = () => {
  customElements.define('app-apipicker', ApiPicker);
  customElements.define('app-searchbar', SearchBar);
  customElements.define('app-imagelist', ImageList);
};

window.addEventListener('load', setup);
