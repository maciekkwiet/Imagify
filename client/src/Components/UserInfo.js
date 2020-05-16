import axios from 'axios';
import faker from 'faker';
import store from '../Store';
import $ from 'jquery';

class UserInfo extends HTMLElement {
  connectedCallback() {
    this.email;
    this.password;
    this.retrieveEmail();
  }
  retrieveEmail() {}
}
export default UserInfo;
