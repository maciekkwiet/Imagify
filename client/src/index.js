import 'fomantic-ui-css/semantic';
import 'fomantic-ui-css/semantic.css';

import SearchBar from './Components/SearchBar.js';
import ImageList from './Components/ImageList.js';
import './style.scss';
import ApiPicker from './Components/ApiPicker.js';
import Image from './Components/Image.js';

const setup = () => {
  customElements.define('app-apipicker', ApiPicker);
  customElements.define('app-searchbar', SearchBar);
  customElements.define('app-imagelist', ImageList);
  customElements.define('app-image', Image);
};

window.addEventListener('load', setup);
