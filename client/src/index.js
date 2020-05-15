import 'fomantic-ui-css/semantic';
import 'fomantic-ui-css/semantic.css';

import './style/imports.scss';
import SearchBar from './Components/SearchBar.js';
import ImageList from './Components/ImageList.js';
import ApiPicker from './Components/ApiPicker.js';
import Image from './Components/Image.js';
import LoginForm from './Components/LoginForm.js';
import RegistrationForm from './Components/RegistrationForm.js';
import ModalWindow from './Components/ModalWindow.js';
import './style/imports.scss';
import Avatar from './Components/Avatar.js';

const setup = () => {
  customElements.define('app-searchbar', SearchBar);
  customElements.define('app-apipicker', ApiPicker);
  customElements.define('app-imagelist', ImageList);
  customElements.define('app-image', Image);
  customElements.define('app-loginform', LoginForm);
  customElements.define('app-registrationform', RegistrationForm);
  customElements.define('app-modalwindow', ModalWindow);
  customElements.define('app-avatar', Avatar);
};

window.addEventListener('load', setup);
