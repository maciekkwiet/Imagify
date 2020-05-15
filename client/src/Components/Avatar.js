
class Avatar extends HTMLElement {
  connectedCallback() {
    this.CLAUDINARY_URL = `https://api.cloudinary.com/v1_1/dek44ccwf/upload`;
    this.CLAUDINARY_UPLOAD_PRESET = `jxnapgs5`
    this.avatarButton = document.createElement('app-avatarButton');
    this.render();
    this.chooseBox = document.querySelector('.choose-box');
    this.chooseBox.appendChild(this.avatarButton);
    this.userButton = document.querySelector('.avatarButton').addEventListener('click', () => {
      this.avatarModalRender();
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
  avatarModalRender() {
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
    const attachButton = document
      .querySelector('.attachButton')
      .addEventListener('click', () => console.log(document.getElementById('.inputFile')));
    const addButton = document.querySelector('.addButton').addEventListener('click', () => {
    constimage = input.files[0]
     } );
  }

async uploadImage() {
  const image = input.files[0];
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', CLAUDINARY_UPLOAD_PRESET);


  response = await axios({
    url: CLAUDINARY_URL,
    method: `POST`,
    headers: {
      `Content-Type`: 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then((res)=> {
console.log(res);
  }).catch((err)=>{
    console.log(err)
  });

}
}

export default Avatar;
