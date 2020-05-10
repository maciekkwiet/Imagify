import axios from 'axios';
import faker from 'faker';

const avatar = faker.image.avatar();
const displayName = `${faker.name.firstName()} ${faker.name.lastName()}`;

class LoginForm extends HTMLElement {
  connectedCallback() {
    this.token = '';
    this.email;
    this.password;
    this.render();
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
      },
    });
  }

  render() {
    this.renderForm();
    this.submitButton = this.querySelector('.pickLogin').addEventListener('click', this.handleFormSubmit);
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
      document.querySelector('.userPlace').innerHTML = `<div class="ui horizontal list">
  <div class="item">
    <img class="ui mini circular image" src="${avatar}" />
    <div class="content">
      <div class="ui sub header">${displayName}</div>
      <a>${this.email}</a>
    </div>
  </div>
</div>
`;
    } catch (ex) {
      $('body').toast({
        message: ex.response.data.error,
      });
      console.error(ex);
    }
  }

  renderForm() {
    this.innerHTML = `  
      <div class="ui form loginStyle">
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
          <div class = "ui grid relaxed formButtonsStyle" >
            <div class="ui blue submit   button pickLogin formButton" >Login</div>
            <div class="ui red submit  button pickClose formButton" >Close</div>
          </div>
          <div class ="ui error message"></div>
        </div>
      </div>`;
  }
}

export default LoginForm;
