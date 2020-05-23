import store from '../Store';

class TokenSubject {
  constructor() {
    this.tokenSubject = store.token;
    this.sendToken();
    this.receiveToken();
  }

  sendToken() {
    const storageToken = localStorage.getItem('token');
    this.tokenSubject.subscribe(
      () => console.log(storageToken),
      (err) => console.log(err),
      () => console.log('completed'),
    );
  }
  receiveToken() {
    this.tokenSubject.next();
  }
}
const Token = new TokenSubject();
export default Token;
