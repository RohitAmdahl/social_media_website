import { commentONprofile } from "../api/auth/API_endpoints.mjs";

const form = document.querySelector("#loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const input = form.input.value;
  const loginForm = { form, input };

  login(commentONprofile, loginForm);
});
