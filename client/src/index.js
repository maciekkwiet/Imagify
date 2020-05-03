import 'fomantic-ui-css/semantic';
import 'fomantic-ui-css/semantic.css';

import SearchBar from './Components/SearchBar.js';
import ImageList from './Components/ImageList.js';
import LoginForm from './Components/LoginForm.js';
import RegistrationForm from './Components/RegistrationForm.js';
import ModalWindow from './Components/ModalWindow.js';
import './style.scss';
import ApiPicker from './Components/ApiPicker.js';
import Image from './Components/Image.js';

const setup = () => {
  customElements.define('app-searchbar', SearchBar);
  customElements.define('app-imagelist', ImageList);
  customElements.define('app-image', Image);
  customElements.define('app-loginform', LoginForm);
  customElements.define('app-registrationform', RegistrationForm);
  customElements.define('app-modalwindow', ModalWindow);
};

window.addEventListener('load', setup);
