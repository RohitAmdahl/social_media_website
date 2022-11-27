import { LoginAuthUser } from "../api/auth/API_endpoints.mjs";
console.log(LoginAuthUser);
import { login } from "../api/auth/login.mjs";
const form = document.querySelector("#loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  const loginForm = { form, email, password };
  form.reset();
  profilePageData();
  login(LoginAuthUser, loginForm);
});

const profilePageData = () => {
  if (form.password.value && form.name.value && form.email.value) {
  }
  return window.location.replace("/profile.html");
};
