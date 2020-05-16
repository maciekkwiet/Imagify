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
    this.querySelector(`#${store.services[0]}`).setAttribute('disabled', 'disabled');
  }

  oppositeDisabled() {
    this.querySelector(`#${store.services[0]}`).removeAttribute('disabled');
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
