import { fromEvent, debounceTime, filter, map } from 'rxjs';
import store from '../Store.js';

class RegistrationForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.signUpButton = this.querySelector('.ui.big.button').addEventListener('click', () => this.nextView());
  }

  nextView() {
    this.renderRegistration();
    this.submitButton = this.querySelector('.ui.submit.button').addEventListener('click', () => {
      console.log(this.querySelector);
    });
    this.email;
    this.password;
    this.confirmPassword;
    this.emailDiv = this.querySelector('#e-mail');
    this.passwordDiv = this.querySelector('#password');
    this.confirmPasswordDiv = this.querySelector('#confirmPassword');
    store.emailInput = fromEvent(this.emailDiv, 'input');
    store.passwordInput = fromEvent(this.passwordDiv, 'input');
    store.confirmPasswordInput = fromEvent(this.confirmPasswordDiv, 'input');
    this.emailInputSubscription = store.emailInput.subscribe((text) => (this.email = text.target.value));
    this.passwordInputSubscription = store.passwordInput.subscribe((text) => (this.password = text.target.value));
    this.confirmPasswordInputSubscription = store.confirmPasswordInput.subscribe(
      (text) => (this.confirmPassword = text.target.value),
    );

    this.submitButton = this.querySelector('.ui.submit.button').addEventListener('click', () => {
      let toSend;
      if (this.password == this.confirmPassword) {
        if (this.email)
          toSend = {
            email: `${this.email}`,
            password: `${this.password}`,
          };
      } else alert('correct password');
      console.log(JSON.stringify(toSend));
    });
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

  renderRegistration() {
    this.innerHTML = `
      <div class="ui placeholder segment">
    <div class="ui two column very relaxed stackable grid">
      <div class="column">
        </div>
      <div class="middle aligned column">
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
      </div>
      </div>
    </div>
  </div>`;
  }

  render() {
    this.innerHTML = `  
        <div class="ui placeholder segment">
        <div class="ui two column very relaxed stackable grid">
          <div class="middle aligned column">
          <
        </div>
            <div class="ui big button">
              <i class="signup icon"></i>
              Sign Up
            </div>
      </div>
          </div>
        </div>
       
      </div>`;
  }
  disconnectedCallback() {
    this.signUpSubscription.unsubscribe();
  }
}
export default RegistrationForm;
