import { singleProfile } from "../api/auth/API_endpoints.mjs";
console.log(singleProfile);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);

async function singlePost() {
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
    const response = await fetch(singleProfile, createData);
    console.log(response);
    const link = await response.json();
    console.log(link);
  } catch (error) {
    console.log(error);
  }
}
singlePost();
