import { POSTregisterURL } from "../api/api.mjs";
/**
 * this async function is explanting how to call an api with method post and header and body,
 * api call that register the users.
 * @param {string} url
 * @param {any} userData = name and id
 * ```js
 * registerUser(POSTregisterURL, user);
 * ```
 */
export async function registerUser(url, userData) {
  try {
    const postData = {
      method: "post",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userData),
    };

    const response = await fetch(POSTregisterURL, postData);
    console.log(response);
    const results = await response.json();
    console.log(results);
    //
  } catch (error) {
    console.log(error);
  }
}

/**
 * variable that
 */
const user = {
  name: "dref",
  email: "fefu@noroff.no",
  password: "ne134fe5",
};

registerUser(POSTregisterURL, user);
