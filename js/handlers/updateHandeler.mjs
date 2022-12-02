// import { makePost } from "../api/auth/API_endpoints.mjs";
// import { updatePost } from "../post/update.mjs";
// import { UPDATE_URL } from "../api/auth/API_endpoints.mjs";

// console.log(updatePost);

// function updatePostListener() {
//   const form = document.getElementById("edit");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     console.log(e);
//     const form = e.target;
//     const title = form[0].value;
//     const body = form[1].value;
//     const image = form[2].value;

//     const id = Number(form[4].dataset.post.id);
//     const update_POST = { form, title, body, image, id };
//     updatePost(`${UPDATE_URL}${post.id}`, update_POST);
//   });
// }
// updatePostListener();
