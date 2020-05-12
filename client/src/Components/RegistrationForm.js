import axios from 'axios';
import $ from 'jquery';

class RegistrationForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.token = '';
    this.email;
    this.password;
    this.confirmPassword;
    this.submitButton = this.querySelector('.pickRegister').addEventListener('click', this.handleRegisterForm);
    this.rules();
  }

  async handleRegisterForm() {
    this.email = $('.ui.form').form('get value', 'email');
    this.password = $('.ui.form').form('get value', 'password');

    const isCorrect = $('.ui.form').form('is valid');

    if (isCorrect[0]) {
      try {
        const response = await axios.post('/api/register', {
          email: `${this.email[0]}`,
          password: `${this.password[0]}`,
        });

        this.token = response.headers.auth;
        localStorage.setItem('token', this.token);
        document.querySelector('.userPlace').innerHTML = `<label>${this.email}</label>`;
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
            <input class="email" type="email" name="email">
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
        <div class = "ui grid relaxed formButtonsStyle" >
          <div class="ui blue submit button pickRegister formButton">Sign up</div>
          <div class="ui red submit button pickCloseRegister formButton">Close</div>
        </div>
        <div class ="ui error message"></div>
      </div>`;
  }
}
export default RegistrationForm;
