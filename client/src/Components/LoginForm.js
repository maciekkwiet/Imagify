class LoginForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.login = this.querySelector('email');
    this.password = this.querySelector('password');
    this.icon = this.querySelector('pickLogin');
    store.searchLoginInput = fromEvent(this.login, 'input');
    store.searchPasswordInput = fromEvent(this.password, 'input');
    store.forcedLogin = fromEvent(this.icon, 'click');

    //     store.searchTextInput
    //       .pipe(
    //         map((e) => e.target.value),
    //         debounceTime(500),
    //         filter((text) => text.length > 2),
    //       )
    //       .subscribe((text) => this.refreshImages(text));
    //     store.forcedSearchText.subscribe((e) => this.refreshImages(e.target.value));
  }

  render() {
    this.innerHTML = `
      <div class="ui form ">
      <div class="fields">
        <div class="field email">
          <label>E-mail</label>
          <input type="email" placeholder="jan.kowalski@poczta.pl">
        </div>
        <div class="field password">
          <label>Password</label>
          <input type="password">
        </div>
        <div class="ui submit button pickLogin">Submit</div>
      </div>
    </div>`;
  }
}

export default LoginForm;
