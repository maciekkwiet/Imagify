import { fromEvent } from 'rxjs';
import store from '../Store';
class ApiPicker extends HTMLElement {
  connectedCallback() {
    this.render();
    this.pexels = this.querySelector('#Pexels');
    this.unsplash = this.querySelector('#Unsplash');
    this.pixabay = this.querySelector('#Pixabay');
    store.checkPexels = fromEvent(this.pexels, 'click');
    store.checkUnsplash = fromEvent(this.unsplash, 'click');
    store.checkPixabay = fromEvent(this.pixabay, 'click');
  }

  render() {
    this.innerHTML = `
<div class="ui form">
<div class="inline fields">
      <div class="ui checkbox">
        <input type="checkbox" id="Pexels" />
        <label>Pexels</label>
    </div>
      <div class="ui checkbox">
        <input type="checkbox" id="Pixabay" />
        <label>Pixabay</label>
  </div>
      <div class="ui checkbox">
        <input type="checkbox" id="Unsplash" />
        <label>Unsplash</label>
  </div>
</div>
</div>
`;
  }
}

export default ApiPicker;
