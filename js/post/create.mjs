import { createPostURL } from "../api/auth/API_endpoints.mjs";

async function createPost() {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);
    // const token = StoredData("token");
    // console.log(token);
    const createData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(createPostURL, createData);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
createPost();
