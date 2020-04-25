class ApiPicker extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
<div class="ui form">
<div class="inline fields">
  <div class="Pexels">
      <div class="ui checkbox">
        <input type="checkbox" name="example" />
        <label>Pexels</label>
      </div>
    </div>
  <div class="Pixabay">
      <div class="ui checkbox">
        <input type="checkbox" name="example" />
        <label>Pixabay</label>
    </div>
  </div>
  <div class="Unsplash">
      <div class="ui checkbox">
        <input type="checkbox" name="example" />
        <label>Unsplash</label>
    </div>
  </div>
</div>
</div>
`;
  }
}

export default ApiPicker;
