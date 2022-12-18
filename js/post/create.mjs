import { makePost } from "../api/auth/API_endpoints.mjs";

const method = "post";
/**
 * this function calls en api with post method
 * authorization need to have in order to call the api
 * function  commentPost helps to comment on post profiles of the user.
 * i added a button and calling the api with the form
 * const method = "post";
 *@param {string} url
 *@param {any} data
 *```js
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
 *  id: post.id,
 * }),
 *  };
 *commentPost(url)
 *```
 */
export async function createPost(post) {
  try {
    const token = localStorage.getItem("Token");
    const data = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: post.title,
        body: post.body,
        media: post.image,
        id: post.id,
      }),
    };

    const response = await fetch(makePost, data);
    const json = await response.json();
  } catch (error) {
    console.log(error);
  }
}

//..................................................................
