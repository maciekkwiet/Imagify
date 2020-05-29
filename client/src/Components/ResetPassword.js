import store from '../Store';

class ResetPassword extends HTMLElement {
  connectedCallback() {
    this.render();
    this.rules();
    this.querySelector('#close').addEventListener('click', () => this.closeModal());
    this.querySelector('.submit-button').addEventListener('click', (event) => {
      this.handleResetSubmit(event);
    });
  }

  async handleResetSubmit(event) {
    this.email = document.querySelector('.email-input').value; // catch email
    this.token = localStorage.getItem('token');
    event.preventDefault(); //stop refresh
    const isCorrect = $('.ui.form').form('is valid');

    if (isCorrect[0] && isCorrect[1]) {
      try {
        const url = `http://localhost:12345/api/resetpassword/reset?` + 'email=' + this.email; //create url with param
        await fetch(url, {
          method: 'POST',
          mode: 'no-cors',
        });
        this.closeModal();
      } catch (ex) {
        console.error(ex);
      }
    }
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
      },
    });
  }

  render() {
    this.innerHTML = `
    <div class="ui form">
      <div class="field">
        <label>Username</label>
        <div class="ui left icon input">
          <input class="email email-input" type="email" name="email"></input>
          <i class="user icon"></i>
        </div>
      </div>
      <div class="fields">
        <div id="close" class="ui red button">Close</div>
        <div id="submit" class="ui green submit button submit-button">Reset</div>
      </div>
      <button class ="ui error message"></button>
    </div>
    `;
  }
}

export default ResetPassword;
