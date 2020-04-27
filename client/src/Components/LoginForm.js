class LoginForm extends HTMLElement {
  connectedCallback() {
    //this.render();
    //this.button = this.querySelector('button').addEventListener('click', this.renderlogin);
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
    // this.innerHTML = `
    //   <div class="ui form ">
    //   <div class="fields">
    //     <div class="field email">
    //       <label>E-mail</label>
    //       <input type="email" placeholder="jan.kowalski@poczta.pl">
    //     </div>
    //     <div class="field password">
    //       <label>Password</label>
    //       <input type="password">
    //     </div>
    //     <div class="mini ui submit  button pickLogin" style="padding: 5px 5px 5px 5px">Submit</div>
    //   </div>
    // </div>`;

    // <div class="ui floating dropdown labeled icon button">
    //   <i class="filter icon"></i>
    //   <span class="text">Filter Posts</span>
    //   <div class="menu"></div>
    //   </div>
    // </div>

    this.innerHTML = `

    

    <div class="ui placeholder segment">
  <div class="ui two column very relaxed stackable grid">
    <div class="column">
      <div class="ui form">
        <div class="field">
          <label>Username</label>
          <div class="ui left icon input">
            <input type="text" placeholder="e-mail">
            <i class="user icon"></i>
          </div>
        </div>
        <div class="field">
          <label>Password</label>
          <div class="ui left icon input">
            <input type="password">
            <i class="lock icon"></i>
          </div>
        </div>
        <div class="ui blue submit button">Login</div>
      </div>
    </div>
    <div class="middle aligned column">
      <div class="ui big button">
        <i class="signup icon"></i>
        Sign Up
      </div>
    </div>
  </div>
  <div class="ui vertical divider">
    Or
  </div>
</div>`;
  }

  render() {
    this.innerHTML = `  
      <div class="ui placeholder segment">
      <div class="ui two column very relaxed stackable grid">
        <div class="column">
          <div class="ui form">
            <div class="field">
              <label>Username</label>
              <div class="ui left icon input">
                <input type="text" placeholder="e-mail">
                <i class="user icon"></i>
              </div>
            </div>
            <div class="field">
              <label>Password</label>
              <div class="ui left icon input">
                <input type="password">
                <i class="lock icon"></i>
              </div>
            </div>
            <div class="ui blue submit button">Login</div>
          </div>
        </div>
        <div class="middle aligned column">
          <div class="ui big button">
            <i class="signup icon"></i>
            Sign Up
          </div>
        </div>
      </div>
      <div class="ui vertical divider">
        Or
      </div>
    </div>`;
  }
}

export default LoginForm;
