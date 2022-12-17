import { commentONprofile } from "../api/auth/API_endpoints.mjs";
console.log(commentONprofile);
/**
 * this function calls en api with post method
 * authorization need to have in order to call the api
 * function  commentPost helps to comment on post profiles of the user.
 * i added a button and calling the api with the form
 *@param {string} url
 *@param {any} data
 *```js
 *body: JSON.stringify({
        body: text.value,
      }),
 *commentPost(url, text) sending a url, and text as a perimeter
 *```
 */

export async function commentPost(url, text) {
  console.log(text);
  try {
    const token = localStorage.getItem("Token");
    const Data = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        body: text.value,
      }),
    };
    const response = await fetch(url, Data);
    const link = await response.json();
  } catch (error) {
    console.log(error);
  }
}
