import { getPostURL } from "../api/auth/API_endpoints.mjs";
console.log(getPostURL);

async function Post() {
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
    const response = await fetch(getPostURL, createData);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

Post();
