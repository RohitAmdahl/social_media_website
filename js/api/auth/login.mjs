import { saveItem } from "../../storage/localstorage.mjs";
import { LoginAuthUser } from "./API_endpoints.mjs";

const method = "post";
export async function login(url, data) {
  try {
    const body = JSON.stringify(data);

    const postData = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    };
    const response = await fetch(LoginAuthUser, postData);
    const results = await response.json();
    window.location.replace("/profile.html");
    const accessToken = results.accessToken;
    localStorage.setItem("Token", accessToken);
    saveItem("profile", results);
  } catch (error) {
    console.log(error);
  }
}
