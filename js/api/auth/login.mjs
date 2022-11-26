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
    console.log(response);

    const results = await response.json();

    const accessToken = results.accessToken;

    localStorage.setItem("Token", accessToken);

    console.log(results);
    //
  } catch (error) {
    console.log(error);
  }

  //
}
