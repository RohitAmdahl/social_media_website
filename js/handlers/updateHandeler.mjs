import { makePost } from "../api/auth/API_endpoints.mjs";
import { updatePost } from "../post/update.mjs";
import { UPDATE_URL } from "../api/auth/API_endpoints.mjs";
// import { editPost } from "../post/edit_post.mjs";

function updatePostListener() {
  const url = new URL(location.href);
  console.log(url);
  const id = url.searchParams.get("id");
  console.log(id);

  const form = document.querySelector("#Edit_edit-post");
  console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form[0].value;

    const body = form[1].value;

    const image = form[2].value;

    const update_POST = { form, title, body, image, id };
    console.log(update_POST);
    updatePost(`${UPDATE_URL}/${id}`, update_POST);
  });
}
updatePostListener();
