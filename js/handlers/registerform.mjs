const form = document.querySelector("#registerForm");
const displayMsg = document.querySelector("#displayMsg");
console.log(displayMsg);

import { register } from "../api/auth/register.mjs";

import { POSTregisterURL } from "../api/auth/API_endpoints.mjs";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;

  const name = form.name.value;

  const email = form.email.value;

  const password = form.password.value;

  const registerForm = { form, name, email, password };

  setTimeout(() => {
    displayMsg.style.display = "none";
  }, 5000);
  // form.reset();
  if (form.password.value && form.name.value && form.email.value) {
    displayMsg.innerHTML = `<p class ="card lead mb-4 m-5 p-2 w-100 text-center">you are successfully registered please log in </p>`;
    form.reset();
  } else {
    return Error;
  }

  register(POSTregisterURL, registerForm);
});
