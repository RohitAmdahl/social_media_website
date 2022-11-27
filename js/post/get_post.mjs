import { getPostURL } from "../api/auth/API_endpoints.mjs";
console.log(getPostURL);
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

    const response = await fetch(getPostURL, createData);
    console.log(response);

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

profileOFPost();
