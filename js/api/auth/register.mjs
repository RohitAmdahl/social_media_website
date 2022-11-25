import { POSTregisterURL } from "./API_endpoints.mjs";

// const path = "/auth/register";
const method = "post";

export async function register(url, data) {
  try {
    const body = JSON.stringify(data);
    const postData = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    };
    const response = await fetch(POSTregisterURL, postData);
    console.log(response);
    const results = await response.json();
    console.log(results);
    //
  } catch (error) {
    console.log(error);
  }

  //
}
