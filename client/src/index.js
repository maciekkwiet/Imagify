import 'fomantic-ui-css/semantic';
import 'fomantic-ui-css/semantic.css';

import SearchBar from './Components/SearchBar.js';
import ImageList from './Components/ImageList.js';
import LoginForm from './Components/LoginForm.js';
import RegistrationForm from './Components/RegistrationForm.js';
import './style.scss';

const setup = () => {
  customElements.define('app-searchbar', SearchBar);
  customElements.define('app-imagelist', ImageList);
  customElements.define('app-loginform', LoginForm);
  customElements.define('app-registrationform', RegistrationForm);
};

window.addEventListener('load', setup);
