class Avatar extends HTMLElement {
  connectedCallback() {
    this.CLAUDINARY_URL = `https://api.cloudinary.com/v1_1/dek44ccwf/upload`;
    this.CLAUDINARY_UPLOAD_PRESET = `jxnapgs5`;
    this.avatarButton = document.createElement('app-avatarButton');
    this.avatar = document.createElement('app-avatar');
    this.render();
    this.chooseBox = document.querySelector('.choose-box');
    this.chooseBox.appendChild(this.avatarButton);
    this.userButton = document.querySelector('.avatarButton').addEventListener('click', () => {
      this.renderAvatarModal();
    });
    // let dupa = document.querySelector('.ui.modal');
    //console.log(this.getAttribute(dupa));
  }
  render() {
    this.avatarButton.innerHTML = `
    <button class="ui basic avatarButton">
    <i class="icon user"></i>
  </button>
    `;
  }
  renderAvatarModal() {
    this.innerHTML = `
    <div class="ui modal">
    <i class="close icon"></i>
   
    <div class="actions">
    <div class="ui button inputFile">
    <input type="file"/>
  </div>
  <div class="ui button addButton">
</div>
      <div class="ui positive right labeled icon button attachButton">
       Attach avatar
        <i class="checkmark icon"></i>
      </div>
    </div>
  </div>
  `;
    $('.ui.modal').modal('show');
    this.input = document.querySelector('input[type = "file"]');
    const attachButton = document.querySelector('.attachButton').addEventListener('click', () => {
      console.log(document.getElementById('.inputFile'));
      this.chooseBox.removeChild(this.avatarButton);

      this.renderAvatar();
    });
    const addButton = document.querySelector('.addButton').addEventListener('click', () => {
      const image = this.input.files[0];
    });
  }
  renderAvatar() {
    this.avatar.innerHTML = `
    <img src="https://cdn.pixabay.com/photo/2017/10/05/21/30/kakturs-2821095_1280.jpg" class = "avatar">
    `;
    this.chooseBox.appendChild(this.avatar);
  }
}

export default Avatar;
