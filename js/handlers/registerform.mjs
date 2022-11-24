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

//   if (
//     checkLength(firstName.value, 4) &&
//     validateEmail(email.value) &&
//     checkLength(subject.value, 14) &&
//     checkLength(message.value, 24)
//   ) {
//     firstName.value = "";
//     email.value = "";
//     subject.value = "";
//     message.value = "";
//     successFullMsg.style.display = "block";
//   } else {
//     successFullMsg.style.display = "none";
//   }
// }
