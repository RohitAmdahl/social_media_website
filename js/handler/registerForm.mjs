import { registerUser } from "../handler/register.mjs";
import { POSTregisterURL } from "../api/api.mjs";
registerUser(POSTregisterURL);
const form = document.querySelector("#registerForm");
console.log(form);

// //
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const form = e.target;
//   const name = form.name.value;
//   const email = form.email.value;
//   const password = form.password.value;

//   const registerForm = { form, name, email, password };
//   console.log(registerForm);
//   // send it to api
// });
