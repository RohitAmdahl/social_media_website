import { removePost } from "../api/auth/API_endpoints.mjs";
import { withDraw } from "../storage/localstorage.mjs";

const deletePost = document.getElementById("delete");
console.log(deletePost);

export async function remove() {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);

    const deleteData = {
      method: "delete",
      headers: {
        "Content-type": "application/json ",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(`${removePost}/${id}`, deleteData);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
remove();
