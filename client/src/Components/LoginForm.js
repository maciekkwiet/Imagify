import store from '../Store.js';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';

class LoginForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.login = this.querySelector('.checkEmail').addEventListener('input', updateValue);
    this.password = this.querySelector('password');
    this.icon = this.querySelector('pickLogin');
    // store.searchLoginInput = fromEvent(this.login, 'input');
    // store.searchPasswordInput = fromEvent(this.password, 'input');
    // store.forcedLogin = fromEvent(this.icon, 'click');

    //this.login.addEventListener('input', updateValue);

    // store.searchLoginInput.pipe(map((e) => e.target.value)).subscribe((text) => console.log(text));
  }

  updateValue(e) {
    log.textContent = e.target.value;
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
                <input class="email" type="text" placeholder="e-mail">
                <i class="user icon"></i>
              </div>
            </div>
            <div class="field">
              <label>Password</label>
              <div class="ui left icon input">
                <input class="password" type="password">
                <i class="lock icon"></i>
              </div>
            </div>
            <div class="ui blue submit button pickLogin">Login</div>
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
