import { PostOFFeeds } from "../api/auth/API_endpoints.mjs";

async function profileOFPost() {
  try {
    const token = localStorage.getItem("Token");

    console.log(token);
    const createData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(PostOFFeeds, createData);
    console.log(response);

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

profileOFPost();
