const HandleUserInfoToken = () => {
  isToken();
};

const isToken = () => {
  let visibility;
  const checkToken = window.localStorage.getItem('token');
  if (checkToken) return true;
  visibility = this.style.visibility;
  console.log(visibility);
  return checkToken ? !visibility : visibility;
};

export default HandleUserInfoToken;
