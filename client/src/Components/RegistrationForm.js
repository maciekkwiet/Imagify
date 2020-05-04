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

    this.emailDiv = this.querySelector('#email');
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
      axios
        .post('/api/register', {
          email: `${this.email}`,
          password: `${this.password}`,
        })
        .then((response) => {
          this.token = response.headers.auth;
          localStorage.setItem('token', this.token);
          document.querySelector('.userPlace').innerHTML = `<label>SIGNED UP</label>`;
        })
        .catch((error) => console.dir(error));
    });
    this.rules();
  }

  rules() {
    $('.ui.form').form({
      on: 'blur',
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
        confirmPassword: {
          identifier: 'confirmPassword',
          rules: [
            {
              type: 'match[password]',
              prompt: 'Your password and confirm password must be the same',
            },
          ],
        },
      },
    });
  }

  render() {
    this.innerHTML = `
      <div class="ui form">
        <div class="field">
          <label>Username</label>
          <div class="ui left icon input">
            <input type="email" id="email">
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
        <div class = "ui grid" style = "margin-top: 10px; margin-bottom:10px">
          <div class="ui blue submit button pickLogin">Sign up</div>
          <div class="ui red submit button pickCloseRegister">Close</div>
        </div>
        <div class ="ui error message"></div>
      </div>`;
  }
}
export default RegistrationForm;
