const form = document.querySelector("#registerForm");

import { register } from "../api/auth/register.mjs";

import { POSTregisterURL } from "../api/auth/API_endpoints.mjs";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;

  const email = form.email.value;

  const password = form.password.value;

  const registerForm = { form, name, email, password };

  register(POSTregisterURL, registerForm);
});
