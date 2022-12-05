import { makePost } from "../api/auth/API_endpoints.mjs";
import { updatePost } from "../post/update.mjs";

import { UPDATE_URL } from "../api/auth/API_endpoints.mjs";
import { getIDParam } from "../utils/id_prams.mjs";

function updatePostListener() {
  const id = getIDParam(id);
  console.log(id);
  const form = document.querySelector("#editForm");
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
    // id = form.id;
    // console.log(id);

    const update_POST = { form, title, body, image };
    console.log(update_POST);
    updatePost(`${UPDATE_URL}/${id}`, update_POST);
  });
}
updatePostListener();
