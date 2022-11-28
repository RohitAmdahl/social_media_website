import { createPost } from "../post/create.mjs";
import { getPostURL } from "../api/auth/API_endpoints.mjs";

const form = document.querySelector("#test");
const title = document.querySelector(".form-title");
const titleValue title.value;
const description = document.querySelector(".form-title");
description.value;
const tag = document.querySelector(".form-title");
tag.value;
const picture = document.querySelector(".form-title");
picture.value;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const titleValue = title.value;
  const description = form[1].value;
  const tag = form[2].value;
  const picture = form[3].value;
  const create_POST = { form, titleValue, description, tag, picture };

  console.log(create_POST);

  createPost(getPostURL, create_POST);
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const form = e.target.value;
//   const title = form.title.value;
//   const description = form.description.value;
//   const tag = form.tag.value;
//   const picture = form.picture.value;
//   const create_POST = { form, title, description, tag, picture };

//   console.log(create_POST);

//   createPost(getPostURL, create_POST);
// });

// profilePageData();
// const profilePageData = () => {
//   if (form.password.value && form.name.value && form.email.value === form) {
//   }
//   // return window.location.replace("/profile.html");
// };
