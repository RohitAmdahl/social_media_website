import { makePost } from "../api/auth/API_endpoints.mjs";
import { updatePost } from "../post/update.mjs";

import { UPDATE_URL } from "../api/auth/API_endpoints.mjs";

function updatePostListener() {
  const url = new URL(location.href);
  console.log(url);
  const id = url.searchParams.get("id");
  console.log(id);
  const form = document.querySelector("#edit_post");
  console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);

    const form = e.target;
    const title = form[0].value;
    console.log(title);
    const body = form[1].value;
    console.log(body);
    const image = form[2].value;
    console.log(image);
    const id = id.value;
    console.log(id);
    // console.log(id);
    const update_POST = { form, title, body, image, id };
    console.log(update_POST);
    updatePost(`${UPDATE_URL}/${post.id}`, update_POST);
    form.reset();
  });
}
updatePostListener();

// const newForm = document.createElement("div"); // card-body
// const form = document.createElement("form"); // form
// const edit_post = document.createElement("div"); // form
