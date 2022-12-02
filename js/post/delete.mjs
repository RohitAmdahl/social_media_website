import { removePost } from "../api/auth/API_endpoints.mjs";
import { withDraw } from "../storage/localstorage.mjs";

const method = "delete";

async function remove() {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);

    const deleteData = {
      method,
      headers: {
        "Content-type": "application/json ",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(`${removePost}/${id}`, deleteData);
    console.log(response);
    const json = await response.json();
    console.log(json);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

remove();

editPost.setAttribute("href", `/pages/profile/editPost/?id=${postData.id}`);
