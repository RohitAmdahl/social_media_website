const form = document.querySelector("#loginForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  const loginForm = { form, email, password };
  console.log(loginForm);
  // send it to api
});
