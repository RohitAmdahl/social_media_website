import { makePost } from "../api/auth/API_endpoints.mjs";
import { updatePost } from "../post/update.mjs";
import { UPDATE_URL } from "../api/auth/API_endpoints.mjs";

function updatePostListener() {
  const form = document.querySelector(".edit");
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

    // const id = Number(form[3].dataset.post.id);
    // console.log(id);
    const update_POST = { form, title, body, image, id };
    console.log(update_Post);
    updatePost(`${UPDATE_URL}${post.id}`, update_POST);
  });
}
updatePostListener();

// const update_post_data = document.querySelector(".edit_data");
// console.log(form);

// const newForm = document.createElement("div"); // card-body
// const form = document.createElement("form"); // form
// const edit_post = document.createElement("div"); // form
