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
    this.inputs = this.querySelectorAll('.checkbox').forEach((node) =>
      node.addEventListener('click', (e) => this.handleChange(e)),
    );
  }
  handleChange(e) {
    console.log(e.target.id);
    console.dir(e.target);
  }

  render() {
    this.innerHTML = `
<div class="ui form">
  <div class="inline fields">
    <div class="ui checked checkbox">
      <input type="checkbox" id="Pexels" checked="">
      <label>Pexels</label>
    </div>
    <div class="ui checked checkbox">
      <input type="checkbox" id="Pixabay" checked="">
      <label>Pixabay</label>
    </div>
    <div class="ui checked checkbox">
      <input type="checkbox" id="Unsplash" checked="">
      <label>Unsplash</label>
    </div>
  </div>
</div>
`;
  }
}

export default ApiPicker;
