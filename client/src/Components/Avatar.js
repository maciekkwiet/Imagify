import $ from 'jquery';
import axios from 'axios';

import { toBase64 } from '../utils';

class Avatar extends HTMLElement {
  connectedCallback() {
    this.avatarPlace = document.createElement('app-avatarplace');
    this.avatar = document.createElement('app-avatar');
    this.renderAvatarPlace();
    this.renderUploadWindow();

    this.chooseBox = document.querySelector('.choose-box');
    this.chooseBox.appendChild(this.avatarPlace);
    this.input = document.querySelector('input[type = "file"]');
    document.querySelector('.attachButton').addEventListener('click', () => {
      this.uploadAvatar();
    });
    console.log(document.querySelector('.attachButton'));
  }
  async uploadAvatar() {
    const token = localStorage.getItem('token');
    const photo = await toBase64(this.input.files[0]);
    try {
      const response = await axios.post('api/upload-avatar', { photo }, { headers: { 'x-auth': token } });
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
