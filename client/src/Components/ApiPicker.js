import store from '../Store';
class ApiPicker extends HTMLElement {
  connectedCallback() {
    this.render();
    store.services = ['Unsplash', 'Pixabay', 'Pexels'];
    this.inputs = this.querySelectorAll('input').forEach((node) =>
      node.addEventListener('click', (e) => this.handleChange(e)),
    );
  }

  handleChange(e) {
    e.target.checked ? store.services.push(e.target.id) : store.services.splice(store.services.indexOf(e.target.id), 1);
    store.services.length === 1 ? this.disabled() : this.oppositeDisabled();
  }

  disabled() {
    this.querySelector(`#${store.services[0]}`).setAttribute('disabled', true);
  }

  oppositeDisabled() {
    this.querySelector(`#${store.services[0]}`).removeAttribute('disabled');
  }

  render() {
    this.innerHTML = `
  <div class="ui form inline fields">
    <div class="ui checked checkbox api">
      <input type="checkbox" id="Pexels" checked=""/>
      <label for="Pexels">Pexels</label>
    </div>
    <div class="ui checked checkbox api">
      <input type="checkbox" id="Pixabay" checked=""/>
      <label for="Pixabay">Pixabay</label>
    </div>
    <div class="ui checked checkbox api">
      <input type="checkbox" id="Unsplash" checked=""/>
      <label for="Unsplash">Unsplash</label>
    </div>
  </div>
`;
  }
}

export default ApiPicker;
