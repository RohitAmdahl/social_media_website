import { UPDATE_URL } from "../api/auth/API_endpoints.mjs";
console.log(UPDATE_URL);
const method = "put";
/**
 * this function calls en api with post method
 * authorization need to have in order to call the api
 * function  updatePost(url, post)
 * updating post with the form
 *@param {string} url
 *@param {any} data
 *```js
 * const method = "put";
 * const data = {
 *  method,
 *  headers: {
 *   "Content-Type": "application/json",
 *   Authorization: `Bearer ${token}`,
 *  },
 *  body: JSON.stringify({
 *   title: post.title,
 *   body: post.body,
 *   media: post.image,
 * }),
 *  };
 * updatePost(`${UPDATE_URL}/${id}`, update_POST);
 * const update_POST = { form, title, body, image, id };
 * the update post i made a button and form so that i am update my post with this api call
 *```
 */

export async function updatePost(url, post) {
  console.log(post);

  try {
    const token = localStorage.getItem("Token");
    console.log(token);

    const updateData = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        title: post.title,
        body: post.body,
        media: post.image,
      }),
    };

    const response = await fetch(`${UPDATE_URL}/${post.id}`, updateData);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
//..................................................................
