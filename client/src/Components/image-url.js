//import { fromEvent } from 'rxjs';


class Image extends HTMLElement {
    constructor() {
      super();
      this.image = [];
      this.render();
    }
    //const basic = Observable.create
    connectedCallback() {
    
    }
    
    createImage1() {
        return `<img class="Image-url" src="${"https://66.media.tumblr.com/9ff6c8d5478fe6ea666d6f14f5342c1b/tumblr_mevhkec7OG1qfvx4yo1_500.gifv"}"/>`;
      }

    render() {
        this.innerHTML = `
        <div class="image-url">
        ${this.createImage1()}
        </div>`;
      }
  }
  export default Image;
  
