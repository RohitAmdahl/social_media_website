import { singleProfile } from "../api/auth/API_endpoints.mjs";
console.log(singleProfile);

const edit_work = document.getElementById("edit_post_edit");
console.log(edit_work);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);

/**
 * this function calls en api with get method for editing post to get values for the form
 * authorization need to have in order to call the api
 * function edit post helps to get value for the form , and fetch with url and Id
 *@param {string} url
 *@param {number} id
 *@param {any} createData
 *```js
 *const createData = {
 *   method: "get",
 *  headers: {
 *    "Content-Type": "application/json",
 *    Authorization: `Bearer ${token}`,
 *  },
 * };
 *editPost()
 *```
 */
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
