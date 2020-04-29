class ModalWindow extends HTMLElement {
  connectedCallback() {
    this.renderButton();
    const registerForm = document.createElement('app-registrationform');
    const loginForm = document.createElement('app-loginform');
    this.loginButton = this.querySelector('.ui.big.button').addEventListener('click', () => {
      this.renderModal();
      const actions = this.querySelector('.actions');
      console.log(this.querySelector('.actions'));

      actions.appendChild(loginForm);
      this.registerButton = this.querySelector('.ui.big.button').addEventListener('click', () => {
        this.removeChild(loginForm);
        this.appendChild(registerForm);
      });
    });
  }
  renderButton() {
    this.innerHTML = `
    <div class="ui big button">
      <i class="user icon"></i>
      Login or Sign Up
    </div>`;
  }
  renderModal() {
    this.innerHTML = `
    <div class="modal">
    Create an account
    
    </div>`;
  }
  //   renderModal() {
  //     this.innerHTML = `
  // <label>Not registered?</label>
  // <div class="ui big button">
  // <i class="user icon"></i>
  // Create an account
  // </div>`;
  //   }

  //   renderModal() {
  //     this.innerHTML = `
  //   <div class="ui modal">
  //   <i class="close icon"></i>

  //     <div class="description">
  //       <div class="ui header">We've auto-chosen a profile image for you.</div>
  //       <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
  //       <p>Is it okay to use this photo?</p>
  //     </div>
  //   </div>
  //   <div class="actions">

  //   </div>
  // </div>`;
  //     $('.ui.modal').modal('show');
  //   }
}
export default ModalWindow;
