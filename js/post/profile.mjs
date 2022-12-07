import { getFollowProfilelink } from "../api/auth/API_endpoints.mjs";

import { BASE_URL } from "../api/auth/API_endpoints.mjs";

const cardModel = document.getElementById("cards");

const token = localStorage.getItem("Token");
const profile = localStorage.getItem("profile");

console.log("Profile", JSON.parse(profile).name);

const form = document.getElementById("edit");
console.log(form);

async function Post(url) {
  try {
    const createData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(data),
    };

    const response = await fetch(url, createData);
    console.log(response);
    const results = await response.json();
    console.log(results);
    console.log("results", results);
  } catch (error) {
    console.log("error", error);
  }
}

Post(`${BASE_URL}/api/v1/social/profiles/${JSON.parse(profile).name}`);
Post(`${BASE_URL}/api/v1/social/profiles/${JSON.parse(profile).name}/posts`);
