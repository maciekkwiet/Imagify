import store from '../Store';
class ApiPicker extends HTMLElement {
  connectedCallback() {
    this.render();
    store.services = ['Unsplash', 'Pixabay', 'Pexels'];
    this.inputs = this.querySelectorAll('.checkbox').forEach((node) =>
      node.addEventListener('click', (e) => this.handleChange(e)),
    );
  }
  handleChange(e) {
    e.target.checked ? store.services.push(e.target.id) : store.services.splice(store.services.indexOf(e.target.id), 1);
    store.services.length === 1 ? this.disabled() : this.oppositeDisabled();
  }

  disabled() {
    store.services.includes('Unsplash') ? this.querySelector('#Unsplash').setAttribute('disabled', 'disabled') : null;
    store.services.includes('Pexels') ? this.querySelector('#Pexels').setAttribute('disabled', 'disabled') : null;
    store.services.includes('Pixabay') ? this.querySelector('#Pixabay').setAttribute('disabled', 'disabled') : null;
  }

  oppositeDisabled() {
    store.services.includes('Unsplash') ? this.querySelector('#Unsplash').removeAttribute('disabled') : null;
    store.services.includes('Pexels') ? this.querySelector('#Pexels').removeAttribute('disabled') : null;
    store.services.includes('Pixabay') ? this.querySelector('#Pixabay').removeAttribute('disabled') : null;
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
