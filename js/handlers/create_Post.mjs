import { createPost } from "../post/create.mjs";

import { makePost } from "../api/auth/API_endpoints.mjs";

const form = document.querySelector("#newPost");

const button = document.querySelector(".cta_btn");
console.log(button);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  const form = e.target;
  const title = form[0].value;
  const body = form[1].value;
  // const tag = form.tag.value;
  const image = form[3].value;
  const create_POST = { form, title, body, image };

  console.log(create_POST);

  createPost(makePost, create_POST);
});

// form.addEventListener("submit", (e) => {
//   console.log(e);
//   // const form = e.target;
//   const title = form.title.value;
//   const body = form.body.value;
//   // const tag = form.tag.value;
//   const image = form.media.value;
//   const create = { form, title, body, image };

//   console.log(create);

//   createPost(makePost, create);
// });

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
