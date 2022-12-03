import { getFollowProfilelink } from "../api/auth/API_endpoints.mjs";

import { BASE_URL } from "../api/auth/API_endpoints.mjs";

const cardModel = document.getElementById("cards");

const token = localStorage.getItem("Token");
const profile = localStorage.getItem("profile");

console.log("Profile", JSON.parse(profile).name);

const form = document.getElementById("edit");
console.log(form);

async function Post(url) {
  try {
    const createData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(data),
    };

    const response = await fetch(url, createData);
    const results = await response.json();
    console.log("results", results);

    // form.innerHTML += `
    // <div>Create post</div>
    // <div>
    //   <label for="title" class="text-muted">Title</label>
    //   <input name="title" type="text" class="form-control" value="${results[0].title}" required />
    // </div>
    // <div>
    //   <label for="textpost" class="text-muted">Description</label>
    //   <textarea name="text" id="text" cols="30" rows="2" class="form-control">
    //   ${results[0].body}
    //   </textarea>
    // </div>

    // <div>
    //   <input name="id" type="hidden" class="form-control" required />
    // </div>
    // <div>
    //   <label for="picture">Picture</label>
    //   <input name="media" type="url" id="file" name="file" class="form-control" />
    // </div>

    // <button class="cta_btn_profile" type="submit" data-postid=${results[0].id} >
    //   update Post
    // </button>`;
  } catch (error) {
    console.log("error", error);
  }
}

Post(`${BASE_URL}/api/v1/social/profiles/${JSON.parse(profile).name}`);
Post(`${BASE_URL}/api/v1/social/profiles/${JSON.parse(profile).name}/posts`);
