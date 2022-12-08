import { singleProfile } from "../api/auth/API_endpoints.mjs";
console.log(singleProfile);

const edit_work = document.getElementById("edit_post_edit");
console.log(edit_work);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);

// const div = document.querySelector("#card");
// console.log(div);
// const form = document.getElementById("#Edit_edit-post");
// console.log(form);
export async function editPost() {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);

    const createData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${singleProfile}/${id}`, createData);
    console.log(response);
    const edit = await response.json();
    console.log(edit);
    // edit_work.innerHTML = `<form id="Edit_edit-post">
    //             <div>Edit post</div>
    //             <div>
    //               <label for="title" class="text-muted">Title</label>
    //               <input
    //                 name="title"
    //                 type="text"
    //                 class="form-control"
    //                 id="title_post"
    //                 value = "${edit.title}"
    //                 required
    //               />
    //             </div>
    //             <div>
    //               <label for="description" class="text-muted"
    //                 >Description</label
    //               >
    //               <textarea
    //                 name="Description"
    //                 id="description"
    //                 cols="30"
    //                 rows="2"
    //                 class="form-control"
    //                 value = "${edit.body}"
    //               ></textarea>
    //             </div>

    //             <div>
    //               <label for="picture">Picture</label>
    //               <input
    //                 name="media"
    //                 type="url"
    //                 name="file"
    //                 id="picture"
    //                 class="form-control"
    //                 value = "${edit.media}"
    //               />
    //             </div>

    //             <button class="cta_btn" type="submit">Post</button>
    //           </form>`;
    const title = document.querySelector("#title_post");
    console.log(title);
    title.value = edit.title;
    const description = document.querySelector("#description");
    console.log(description);
    description.value = edit.body;
    const link = document.getElementById("picture");
    console.log(link);
    link.value = edit.media;
  } catch (error) {
    console.log(error);
  }
}

editPost();
