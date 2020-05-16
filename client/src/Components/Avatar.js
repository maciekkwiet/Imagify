import axios from 'axios';

class Avatar extends HTMLElement {
  connectedCallback() {
    this.avatarPlace = document.createElement('app-avatarplace');
    this.avatar = document.createElement('app-avatar');
    console.log('dupsko');
    this.renderAvatarPlace();
    this.renderUploadWindow();

    this.chooseBox = document.querySelector('.choose-box');
    this.chooseBox.appendChild(this.avatarPlace);
    this.input = document.querySelector('input[type = "file"]');
    const attachButton = document.querySelector('.attachButton').addEventListener('click', () => {
      console.log(localStorage.getItem('token'));
      this.uploadAvatar();

      console.log('dupa2');
      console.log(this.file);
    });
    console.log(document.querySelector('.attachButton'));

    console.log('dupa3');
  }
  async uploadAvatar() {
    this.token = localStorage.getItem('token');
    this.file = this.input.files[0];
    let config = {
      headers: {
        token: this.token,
      },
    };

    let data = {
      file: this.file,
    };

    //axios.post(URL, data, config).then(...)

    try {
      const response = await axios.post('api/upload-avatar', data);
      console.log(response);

      //this.closeModal();
    } catch (ex) {
      console.error(ex);
      $('body').toast({
        message: ex.response.data.error,
      });
    }
  }
  renderUploadWindow() {
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
