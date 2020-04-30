class Image extends HTMLElement {
    constructor() {
      super();
    }
   
    connectedCallback() {
      this.render();
    }
    
    createImage() {
        return `<img class="Image-url" src="${"https://66.media.tumblr.com/9ff6c8d5478fe6ea666d6f14f5342c1b/tumblr_mevhkec7OG1qfvx4yo1_500.gifv"}"/>`;
      }

    render() {
        this.innerHTML = `
        <div class="app-image">
        ${this.createImage()}
        </div>`;
      }
     
  
  }
  export default Image;

