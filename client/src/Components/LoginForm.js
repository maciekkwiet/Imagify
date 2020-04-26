class LoginForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.button = this.querySelector('button').addEventListener('click', renderlogin);
    // this.login = this.querySelector('email');
    // this.password = this.querySelector('password');
    // this.icon = this.querySelector('pickLogin');
    // store.searchLoginInput = fromEvent(this.login, 'input');
    // store.searchPasswordInput = fromEvent(this.password, 'input');
    // store.forcedLogin = fromEvent(this.icon, 'click');

    //     store.searchTextInput
    //       .pipe(
    //         map((e) => e.target.value),
    //         debounceTime(500),
    //         filter((text) => text.length > 2),
    //       )
    //       .subscribe((text) => this.refreshImages(text));
    //     store.forcedSearchText.subscribe((e) => this.refreshImages(e.target.value));
  }

  renderlogin() {
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
        <div class="mini ui submit  button pickLogin" style="padding: 5px 5px 5px 5px">Submit</div>
      </div>
    </div>`;
  }

  render() {
    this.innerHTML = `
    <button class="ui inverted green button">Login</button>`;
  }
}

export default LoginForm;
