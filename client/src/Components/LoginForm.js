import axios from 'axios';
import $ from 'jquery';

import store from '../Store';

class LoginForm extends HTMLElement {
  connectedCallback() {
    this.token = '';
    this.email = '';
    this.password = '';
    this.render();
    this.rules();
  }

  closeModal() {
    store.modal.next({ type: 'CLOSE' });
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
    this.querySelector('#submit').addEventListener('click', this.handleFormSubmit);
    this.querySelector('#close').addEventListener('click', this.closeModal);
  }

  async handleFormSubmit() {
    this.email = document.querySelector('#e-mail').value;
    this.password = document.querySelector('#password').value;
    try {
      const response = await axios.post('api/login', {
        email: `${this.email}`,
        password: `${this.password}`,
      });
      this.token = response.data.token;
      localStorage.setItem('token', this.token);
      document.querySelector('.userPlace').innerHTML = `<label>${this.email}</label>`;
    } catch (ex) {
      $('body').toast({
        message: ex.response.data.error,
      });
      console.error(ex);
    }
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
            <div class="fields">
              <div id="close" class="ui red button">Close</div>
              <div id="submit" class="ui blue submit button">Login</div>
          </div>
          <button class ="ui error message"></button>
        </div>
      </div>`;
  }
}

export default LoginForm;
