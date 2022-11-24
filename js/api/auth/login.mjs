import { LoginAuthUser } from "./API_endpoints.mjs";
const method = "post";

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
    console.log(response);
    const results = await response.json();
    console.log(results);
    //
  } catch (error) {
    console.log(error);
  }

  //
}
