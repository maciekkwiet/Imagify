import 'fomantic-ui-css/semantic';
import 'fomantic-ui-css/semantic.css';

import SearchBar from './Components/SearchBar.js';
import ImageList from './Components/ImageList.js';
import LoginForm from './Components/LoginForm.js';
import RegistrationForm from './Components/RegistrationForm.js';
import ModalWindow from './Components/ModalWindow.js';
import './style.scss';

//document.createElement('app-modalwindow');
// const modalWindow = 'app-modalwindow';
// document.querySelector('.ui.big.button').addEventListener('click', () => console.log('dupa'));

// modalWindow.appendChild('app-loginform');

const setup = () => {
  customElements.define('app-searchbar', SearchBar);
  customElements.define('app-imagelist', ImageList);
  customElements.define('app-loginform', LoginForm);
  customElements.define('app-registrationform', RegistrationForm);
  customElements.define('app-modalwindow', ModalWindow);
};

window.addEventListener('load', setup);
