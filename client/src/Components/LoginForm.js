import axios from 'axios';
import $ from 'jquery';
import store from '../Store';

class LoginForm extends HTMLElement {
  connectedCallback() {
    this.email;
    this.password;
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
    this.querySelector('#submit').addEventListener('click', () => this.handleFormSubmit());
    this.querySelector('#close').addEventListener('click', () => this.closeModal());
  }

  async handleFormSubmit() {
    this.email = $('.ui.form').form('get value', 'email');
    this.password = $('.ui.form').form('get value', 'password');

    const isCorrect = $('.ui.form').form('is valid');

    if (isCorrect[0] && isCorrect[1]) {
      try {
        const response = await axios.post('api/login', {
          email: `${this.email}`,
          password: `${this.password}`,
        });
        const token = response.data.token;
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

  renderForm() {
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
          <div class="labelPassword">
            <label>Password</label>
          </div>
          <div class="ui left icon input">
            <input type="password" id="password" name="password">
            <i class="lock icon"></i>
          </div>
        </div>
        <div class="fields loginFormButtons">
          <div id="close" class="ui red button">Close</div>
          <div id="submit" class="ui green submit button">Login</div>
        </div>
          <div class="fields">
            <a href="/api/facebook">
              <button class="ui facebook button">
                <i class="facebook icon"></i>
                Sign in with Facebook
              </button>
            </a>
          </div>
          <button class ="ui error message"></button>
        </div>
      </div>`;
  }
}

export default LoginForm;
