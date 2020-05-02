import { fromEvent, debounceTime, filter, map } from 'rxjs';
import store from '../Store.js';
const axios = require('axios');

class RegistrationForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.token = '';

    this.email;
    this.password;
    this.confirmPassword;

    this.emailDiv = this.querySelector('#e-mail');
    this.passwordDiv = this.querySelector('#password');
    this.confirmPasswordDiv = this.querySelector('#confirmPassword');

    store.emailRegisterInput = fromEvent(this.emailDiv, 'input');
    store.passwordRegisterInput = fromEvent(this.passwordDiv, 'input');
    store.confirmPasswordRegisterInput = fromEvent(this.confirmPasswordDiv, 'input');

    this.emailInputSubscription = store.emailRegisterInput.subscribe((text) => (this.email = text.target.value));
    this.passwordInputSubscription = store.passwordRegisterInput.subscribe(
      (text) => (this.password = text.target.value),
    );
    this.confirmPasswordInputSubscription = store.confirmPasswordRegisterInput.subscribe(
      (text) => (this.confirmPassword = text.target.value),
    );

    this.submitButton = this.querySelector('.ui.submit.button').addEventListener('click', () => {
      if (this.password == this.confirmPassword) {
        axios
          .post('/api/register', {
            email: `${this.email}`,
            password: `${this.password}`,
          })
          .then((response) => {
            this.token = response.headers.auth;
            localStorage.setItem('token', this.token);
          })
          .catch((error) => console.dir(error));
      }
    });
    this.rules();
  }

  rules() {
    $(document).ready(function () {
      $('.ui.form').form({
        fields: {
          email: {
            identifier: 'email',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your e-mail',
              },
              {
                type: 'email',
                prompt: 'Please enter a valid e-mail',
              },
            ],
          },
          password: {
            identifier: 'password',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your password',
              },
              {
                type: 'length[6]',
                prompt: 'Your password must be at least 6 characters',
              },
            ],
          },
        },
      });
    });
  }

  render() {
    this.innerHTML = `
      <div class="ui form">
        <div class="field">
          <label>Username</label>
          <div class="ui left icon input">
            <input type="text" id="e-mail">
            <i class="user icon"></i>
          </div>
        </div>
        <div class="field">
          <label>Password</label>
          <div class="ui left icon input">
            <input type="password" id="password">
            <i class="lock icon"></i>
          </div>
        </div>
        <div class="field">
          <label>Confirm Password</label>
          <div class="ui left icon input">
            <input type="password" id="confirmPassword">
            <i class="lock icon"></i>
          </div>
        </div>
        <div class="field">
          <label>Favourites</label>
          <div class="ui left icon input">
            <input type="favourites">
            <i class="lock icon"></i>
          </div>
        </div>
        <div class="ui submit button">
          <i class="Submit"></i>
          Sign Up
        </div>
        <div class ="ui error message"></div>
      </div>`;
  }
}
export default RegistrationForm;
