import { createPost } from "../post/create.mjs";

function setCreatePostListener() {
  const form = document.querySelector("#create");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    const form = e.target;
    const title = form[0].value;
    const body = form[1].value;
    const image = form[2].value;
    const id = form.id.value;
    const create_POST = { form, title, body, image, id };

    console.log(create_POST);

    createPost(create_POST);
    form.reset();
  });
}
setCreatePostListener();
