import axios from 'axios';
import $ from 'jquery';
import store from '../Store';

class RegistrationForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.querySelector('#close').addEventListener('click', () => this.closeModal());
    this.querySelector('#submit').addEventListener('click', () => this.handleRegisterForm());
    this.email;
    this.password;
    this.confirmPassword;
    this.rules();
  }

  closeModal() {
    store.modal.next({ type: 'CLOSE' });
  }

  async handleRegisterForm() {
    this.email = $('.ui.form').form('get value', 'email');
    this.password = $('.ui.form').form('get value', 'password');

    const isCorrect = $('.ui.form').form('is valid');

    if (isCorrect[0] && isCorrect[1]) {
      try {
        const response = await axios.post('/api/register', {
          email: `${this.email}`,
          password: `${this.password}`,
        });

        const token = response.headers.auth;
        localStorage.setItem('token', token);
        store.token.next(token);
        this.closeModal();
      } catch (ex) {
        $('body').toast({
          message: ex.response.data.error,
        });
        console.error(ex);
      }
    }
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
        <input class="email" type="email" name="email"></input>
        <i class="user icon"></i>
      </div>
    </div>
    <div class="field">
      <label>Password</label>
      <div class="ui left icon input">
        <input type="password" name="password" id="password" />
        <i class="lock icon"></i>
      </div>
    </div>
    <div class="field">
      <label>Confirm Password</label>
      <div class="ui left icon input">
        <input type="password" id="confirmPassword"></input>
        <i class="lock icon"></i>
      </div>
    </div>
    <div class="fields">
      <div id="close" class="ui red button">Close</div>
      <div id="submit" class="ui green submit button">Sign up</div>
    </div>
    <div class="ui error message"></div>
  </div>
  `;
  }
}
export default RegistrationForm;
