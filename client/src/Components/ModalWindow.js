class ModalWindow extends HTMLElement {
  connectedCallback() {
    this.renderButton();
    const registerForm = document.createElement('app-registrationform');
    const loginForm = document.createElement('app-loginform');

    this.loginOrSignButton = this.querySelector('.ui.big.button').addEventListener('click', () => {
      this.renderModal();
      const modal = this.querySelector('.modal');
      modal.appendChild(loginForm);
      this.closeModal = this.querySelector('.close').addEventListener('click', () => {
        this.renderButton();
      });
      this.registerButton = this.querySelector('.ui.big.button').addEventListener('click', () => {
        //modal.removeChild(loginForm);
        this.renderRegister();
        const registerModal = this.querySelector('.modal');
        registerModal.appendChild(registerForm);
        this.closeButton = this.querySelector('.ui.button').addEventListener('click', () => {
          this.renderModal();
          const modal = this.querySelector('.modal');
          modal.appendChild(loginForm);
          this.closeRegister = this.querySelector('.pickLogin').addEventListener('click', () => {
            this.renderButton();
          });
        });
      });
    });
  }
  renderRegister() {
    this.innerHTML = `
  <style>
  .modal-bg {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: visible;
    opacity: 1;
    transition: visibility 0s, opacity 1s;
  }
  // .bg-active {
  //   visibility: visible;
  //   opacity: 1;
  // }
  
  .modal{
    background-color: white;
    width: 40%;
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  </style>
  <div class=modal-bg> 
  <div class=modal
  <label></label>
  <button class="ui button">
  <i class="remove icon"></i>
  close
</div>
`;
  }
  renderButton() {
    this.innerHTML = `
    <div class="ui big button">
      <i class="user icon"></i>
      Login or Sign Up
    </div>`;
  }
  // renderModal() {
  //   this.innerHTML = `
  //   <div class="modal">
  //   Create an account

  //   </div>`;
  // }
  renderModal() {
    this.innerHTML = `
    <style>
    .modal-bg {
      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      visibility: visible;
      opacity: 1;
      transition: visibility 0s, opacity 1s;
    }
    // .bg-active {
    //   visibility: visible;
    //   opacity: 1;
    // }
    
    .modal{
      background-color: white;
      width: 70%;
      height: 200px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    </style>
    <div class=modal-bg> 
    <div class=modal
  <label></label>
  <div class="ui big button">
  <i class="user icon"></i>
  Create an account
  </div>
  </div>
  </div>
  `;
  }

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
