import { createPost } from "../post/create.mjs";

import { makePost } from "../api/auth/API_endpoints.mjs";

const form = document.getElementById("posting");

// const button = document.querySelector(".cta_btn");
// console.log(button);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  const form = e.target;

  const title = form[0].value;

  const body = form[1].value;

  const image = form[2].value;

  console.log(image);

  const create_POST = { form, title, body, image };

  console.log(create_POST);

  createPost(makePost, create_POST);
});
