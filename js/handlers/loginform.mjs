import { LoginAuthUser, singleProfile } from "../api/auth/API_endpoints.mjs";
console.log(LoginAuthUser);
import { login } from "../api/auth/login.mjs";
/**
 * this function logINform()
 *  login in with the form selection form has addEventListener for submit submit
 *
 */
function logINform() {
  const form = document.querySelector("#loginForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginForm = { form, email, password };
    form.reset();

    login(LoginAuthUser, loginForm);
  });
}

logINform();
