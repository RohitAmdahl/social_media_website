import { getPostURL } from "../api/auth/API_endpoints.mjs";
console.log(getPostURL);

const method = "post";

export async function createPost(url, data) {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);
    const parsed = JSON.parse(localStorage.getItem("token"));
    console.log(parsed);
    const createData = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${parsed}`,
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, createData);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

createPost();

// entryPost({
//   title: "example",
//   body: "very bad day",
// });
