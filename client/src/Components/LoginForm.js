import store from '../Store.js';
import { fromEvent } from 'rxjs';
const axios = require('axios');

class LoginForm extends HTMLElement {
  connectedCallback() {
    this.token = '';
    this.render();
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
      },
    });
  }

  render() {
    this.renderForm();
    this.email;
    this.password;

    // this.emailDiv = this.querySelector('#e-mail');
    // this.passwordDiv = this.querySelector('#password');

    // store.emailLoginInput = fromEvent(this.emailDiv, 'input');
    // store.passwordLoginInput = fromEvent(this.passwordDiv, 'input');

    // this.emailInputLoginSubscription = store.emailLoginInput.subscribe((text) => (this.email = text.target.value));
    // this.passwordInputLoginSubscription = store.passwordLoginInput.subscribe(
    //   (text) => (this.password = text.target.value),
    // );

    this.submitButton = this.querySelector('.pickLogin').addEventListener('click', () => {
      this.email = this.querySelector('#e-mail').value;
      this.password = this.querySelector('#password').value;
      axios
        .post('api/login', {
          email: `${this.email}`,
          password: `${this.password}`,
        })
        .then((response) => {
          this.token = response.data.token;
          localStorage.setItem('token', this.token);
          document.querySelector('.userPlace').innerHTML = `<label>LOGGED IN</label>`;
        })
        .catch((error) => console.dir(error));
    });
    this.rules();
  }

  renderForm() {
    this.innerHTML = `  
       
      <div class="ui form">
        <div class="field">
          <label>Username</label>
          <div class="ui left icon input">
              <input class="email" type="email" placeholder="e-mail" name="email" id="e-mail">
              <i class="user icon"></i>
            </div>
          </div>
          <div class="field">
            <label>Password</label>
            <div class="ui left icon input">
              <input class="password" type="password" name="password" id="password">
              <i class="lock icon"></i>
            </div>
          </div>
          <div class = "ui grid" style = "margin-top: 10px; margin-bottom:10px">
            <div class="ui blue submit button pickLogin">Login</div>
            <div class="ui red submit button pickClose">Close</div>
          </div>
          <div class ="ui error message"></div>
        </div>
      </div>`;
  }
}

export default LoginForm;
