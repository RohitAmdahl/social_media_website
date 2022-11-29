import { createPost } from "../post/create.mjs";

import { makePost } from "../api/auth/API_endpoints.mjs";

const button = document.querySelector(".cta_btn");
const form = document.querySelector("#newPost");
console.log(form);

form.addEventListener("submit", (e) => {
  console.log(e);
  form = e.target.value;
  const title = form.title.value;
  const description = form.description.value;
  const tag = form.tag.value;
  const picture = form.picture.value;
  const create_POST = { form, title, description, tag, picture };

  console.log(create_POST);

  createPost(makePost, create_POST);
});

// const title = document.querySelector(".form-title");
// const titleValue = title.value;
// const description = document.querySelector(".form-title");
// description.value;
// const tag = document.querySelector(".form-title");
// tag.value;
// const picture = document.querySelector(".form-title");

// picture.value;

// const button = document.querySelector(".cta_btn");
// console.log(button);
