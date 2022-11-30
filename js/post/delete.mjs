import { remove } from "../api/auth/API_endpoints.mjs";

async function remove() {
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

    const response = await fetch(remove, deleteData);
    console.log(response);
    const json = await response.json();
    console.log(json);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

remove();
