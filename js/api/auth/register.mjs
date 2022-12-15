import { POSTregisterURL } from "./API_endpoints.mjs";

const method = "post";

export async function register(url, data) {
  try {
    const body = JSON.stringify(data);
    const postData = {
      method,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body,
    };
    const response = await fetch(POSTregisterURL, postData);
    const results = await response.json();
  } catch (error) {
    console.log(error);
  }
}
