import 'fomantic-ui-css/semantic';
import 'fomantic-ui-css/semantic.css';

import './style/imports.scss';
import SearchBar from './Components/SearchBar.js';
import ImageList from './Components/ImageList.js';
import ApiPicker from './Components/ApiPicker.js';
import Image from './Components/Image.js';
import LoginForm from './Components/LoginForm.js';
import RegistrationForm from './Components/RegistrationForm.js';
import Favourites from './Components/Favourites.js';
import Avatar from './Components/Avatar.js';
import Modal from './Components/Modal.js';
import LoginButton from './Components/LoginButton.js';
import LoginOrRegister from './Components/LoginOrRegister.js';
import SettingsButton from './Components/SettingsButton';
import UserInfo from './Components/UserInfo';
import ResetPassword from './Components/ResetPassword';
import LoadMoreButton from './Components/LoadMoreButton';

import CreatePasswordForm from './Components/CreatePasswordForm';
import CreatePassword from './Components/CreatePassword';

import Filter from './Components/Filter';
import Sort from './Components/Sort';

const setup = () => {
  customElements.define('app-searchbar', SearchBar);
  customElements.define('app-apipicker', ApiPicker);
  customElements.define('app-imagelist', ImageList);
  customElements.define('app-image', Image);
  customElements.define('app-favourites', Favourites);
  customElements.define('app-loginform', LoginForm);
  customElements.define('app-registrationform', RegistrationForm);
  customElements.define('app-avatar', Avatar);
  customElements.define('app-modal', Modal);
  customElements.define('app-loginbutton', LoginButton);
  customElements.define('app-loginorregister', LoginOrRegister);
  customElements.define('app-settingsbutton', SettingsButton);
  customElements.define('app-userinfo', UserInfo);
  customElements.define('app-resetpassword', ResetPassword);
  customElements.define('app-loadmorebutton', LoadMoreButton);

  customElements.define('app-createpasswordform', CreatePasswordForm);
  customElements.define('app-createpassword', CreatePassword);

  customElements.define('app-filter', Filter);
  customElements.define('app-sort', Sort);
};

window.addEventListener('load', setup);
