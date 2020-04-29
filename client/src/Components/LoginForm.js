import store from '../Store.js';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
const axios = require('axios');

class LoginForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.signUpButton = this.querySelector('.ui.big.button').addEventListener('click', () => this.nextViev());
  }

  render() {
    this.innerHTML = `
    <div class="ui big button">
      <i class="user icon"></i>
      Login or Sign Up
    </div>`;
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
    // $('.ui.form').form({
    //   fields: {
    //     email: {
    //       identifier: 'email',
    //       rules: [
    //         {
    //           type: 'empty',
    //           prompt: 'Please enter your e-mail',
    //         },
    //         {
    //           type: 'email',
    //           prompt: 'Please enter a valid e-mail',
    //         },
    //       ],
    //     },
    //     password: {
    //       identifier: 'password',
    //       rules: [
    //         {
    //           type: 'empty',
    //           prompt: 'Please enter your password',
    //         },
    //         {
    //           type: 'length[6]',
    //           prompt: 'Your password must be at least 6 characters',
    //         },
    //       ],
    //     },
    //   },
    // });
  }

  nextViev() {
    this.render_form();
    this.email;
    this.password;

    this.emailDiv = this.querySelector('#e-mail');
    this.passwordDiv = this.querySelector('#password');

    store.emailLoginInput = fromEvent(this.emailDiv, 'input');
    store.passwordLoginInput = fromEvent(this.passwordDiv, 'input');

    this.emailInputLoginSubscription = store.emailLoginInput.subscribe((text) => (this.email = text.target.value));
    this.passwordInputLoginSubscription = store.passwordLoginInput.subscribe(
      (text) => (this.password = text.target.value),
    );

    this.submitButton = this.querySelector('.pickLogin').addEventListener('click', () => {
      axios
        .post('./login', {
          email: `${this.email}`,
          password: `${this.password}`,
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));

      // let toSend;
      // toSend = {
      //   email: `${this.email}`,
      //   password: `${this.password}`,
      // };

      // console.log(JSON.stringify(toSend));
    });
    this.rules();
  }

  render_form() {
    this.innerHTML = `  
      <div class="ui placeholder segment">
      <div class="ui two column very relaxed stackable grid">
        <div class="column">
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
            <div class="ui blue submit button pickLogin">Login</div>
          </div>
        </div>
        <div class="middle aligned column">
          <div class="ui big button">
            <i class="signup icon"></i>
            Sign Up
          </div>
        </div>
      </div>
      <div class="ui vertical divider">
        Or
      </div>
    </div>`;
  }
}

export default LoginForm;
