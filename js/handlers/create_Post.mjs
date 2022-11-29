import { createPost } from "../post/create.mjs";
import { makePost } from "../api/auth/API_endpoints.mjs";
const form = document.querySelector("#test");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target.value;
  const title = form.title.value;
  const description = form.description.value;
  const tag = form.tag.value;
  const picture = form.picture.value;
  const create_POST = { form, title, description, tag, picture };

  console.log(create_POST);
  testTemplate();
  createPost(makePost, create_POST);

  async function testTemplate() {
    const result = await createPost(makePost, create_POST());
    console.log(result);

    console.log(form);
  }
});

// const title = document.querySelector(".form-title");
// const titleValue = title.value;
// const description = document.querySelector(".form-title");
// description.value;
// const tag = document.querySelector(".form-title");
// tag.value;
// const picture = document.querySelector(".form-title");
// picture.value;
