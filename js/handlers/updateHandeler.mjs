// import { getPostURL } from "../api/auth/API_endpoints.mjs";
import { updatePost } from "../post/update.mjs";

console.log(updatePost);

function updatePostListener() {
  const form = document.getElementById("edit");

  const url = new url(location.href);
  const id = url.searchParams.get("id");
  // const queryString = document.location.location;
  // const params = new URLSearchParams(queryString);
  // console.log(params);
  // const id = params.get("id");
  // console.log(id);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(e);
    // forn.id.value.id;
    const form = e.target;
    const title = form[0].value;
    const body = form[1].value;
    const image = form[2].value;
    const id = form.post.id;
    const update_POST = { form, title, body, image, id };
    form.reset();
    updatePost(`${putUpdate}${id}`, update_POST);
  });
}
updatePostListener();
