import { singleProfile } from "../api/auth/API_endpoints.mjs";
console.log(singleProfile);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);

const div = document.querySelector("#card");
console.log(div);

export async function editPost() {
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
    const response = await fetch(`${singleProfile}/${id}`, createData);
    console.log(response);
    const edit = await response.json();
    console.log(edit);
    const title = document.querySelector("#title_post");
    console.log(title);
    const description = document.querySelector("#description");
    console.log(description);
    const link = document.getElementById("picture");
    console.log(link);
  } catch (error) {
    console.log(error);
  }
}

editPost();
