import store from '../Store';

class Avatar extends HTMLElement {
  connectedCallback() {
    this.avatarPlace = document.createElement('app-avatarplace');
    this.avatar = document.createElement('app-avatar');
    console.log('dupsko');
    this.renderAvatarPlace();
    this.renderUpload();

    this.chooseBox = document.querySelector('.choose-box');
    this.chooseBox.appendChild(this.avatarPlace);
    this.input = document.querySelector('input[type = "file"]');
    const attachButton = document.querySelector('.attachButton').addEventListener('click', () => {
      console.log('dupa2');
      console.log(this.input.files[0]);
      //this.renderAvatar();
    });
    console.log(document.querySelector('.attachButton'));

    console.log('dupa3');
  }
  renderUpload() {
    this.innerHTML = `
    
    <i class="close icon"></i>
    <div class="actions">
    <div class="ui button inputFile">
    <input type="file"/>
      <div class="ui positive right labeled icon button attachButton">
       Attach avatar
        <i class="checkmark icon"></i>
      </div>
  </div>
  `;
  }
  renderAvatarPlace() {
    this.avatarPlace.innerHTML = `
    <img src="https://cdn.pixabay.com/photo/2017/10/05/21/30/kakturs-2821095_1280.jpg" class = "avatar">
    `;
  }
}

export default Avatar;
