import { saveItem } from "../../storage/localstorage.mjs";
import { LoginAuthUser } from "./API_endpoints.mjs";

const method = "post";
/**
 * this function calls en api with post method
 *  api fetch and getting accessToken
 *@param {string} url
 *body: JSON.stringify(data),
 *
 */
export async function login(url, data) {
  try {
    const postData = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(LoginAuthUser, postData);
    // if (response) {
    //   window.location.replace("/index.html");
    // }
    const results = await response.json();
    console.log(results);
    window.location.replace("/index.html");
    const accessToken = results.accessToken;
    localStorage.setItem("Token", accessToken);
    saveItem("profile", results);
  } catch (error) {
    console.log(error);
  }
}
