import { LoginAuthUser } from "../api/auth/API_endpoints.mjs";
console.log(LoginAuthUser);
const form = document.querySelector("#loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  const loginForm = { form, email, password };
  // form.reset();

  console.log(loginForm);
  // send it to api
  login(LoginAuthUser, loginForm);
});
