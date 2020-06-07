import axios from 'axios';
import $ from 'jquery';
import store from '../Store';

class CreatePassword extends HTMLElement {
  connectedCallback() {
    this.render();
    this.querySelector('#close').addEventListener('click', () => this.closeModal());
    this.querySelector('#change').addEventListener('click', () => this.handleResetSubmit());
    this.password;
    this.confirmPassword;
    this.rules();
  }

  closeModal() {
    store.modal.next({ type: 'CLOSE' });
  }

  async handleResetSubmit() {
    let locationToken = new URL(location.href).searchParams.get('token');

    this.email = $('.ui.form').form('get value', 'email');
    this.password = $('.ui.form').form('get value', 'password');

    try {
      const response = await axios.post(
        `/api/resetpassword/create?` + `resetToken=` + locationToken + '&' + `password=` + this.password[1],
      );
      this.closeModal();
    } catch (ex) {
      $('body').toast({
        message: ex.response.data.error,
      });
      console.error(ex);
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
    <div class="ui tiny modal" id="create">
  <div class="ui form">
    <div class="field">
      <label>Username</label>
      <div class="ui left icon input">
        <input class="email" type="email" name="email"></input>
        <i class="user icon"></i>
      </div>
    </div>
    <div class="field">
      <label>New Password</label>
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
      <a href="https://cc-imagify.herokuapp.com/" id="close" class="ui red button">Close</a>
      <a href="https://cc-imagify.herokuapp.com/" id="change" class="ui green submit button">Change Password</a>
    </div>
    <div class="ui error message"></div>
  </div>
  </div>
  `;
  }
}
export default CreatePassword;
