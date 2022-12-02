import { makePost } from "../api/auth/API_endpoints.mjs";
import { updatePost } from "../post/update.mjs";

console.log(updatePost);

function updatePostListener() {
  const form = document.getElementById("edit");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(e);
    const form = e.target;
    const title = form[0].value;
    const body = form[1].value;
    const image = form[2].value;

    const id = Number(form[3].dataset.postid);
    const update_POST = { form, title, body, image, id };
    form.reset();
    updatePost(`${putUpdate}${post.id}`, update_POST);
  });
}
updatePostListener();
