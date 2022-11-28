import { createPost } from "../post/create.mjs";
const form = document.getElementById("create_post");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target.value;
  const tittle = form.tittle.value;
  const description = form.description.value;
  const tag = form.tag.value;
  const picture = form.picture.value;
  const create_POST = { form, tittle, description, tag, picture };

  console.log(create_POST);
  createPost(getPostURL, create_POST);
});

// profilePageData();
// const profilePageData = () => {
//   if (form.password.value && form.name.value && form.email.value === form) {
//   }
//   // return window.location.replace("/profile.html");
// };
