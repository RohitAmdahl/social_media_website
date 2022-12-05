import { react } from "../api/auth/API_endpoints.mjs";
console.log(react);
import { getIDParam } from "../utils/id_prams.mjs";

export async function likeAPost(id) {
  try {
    const id = getIDParam("id");
    // const symbol = "U+1F44D";
    const emoji = "👍";
    const token = localStorage.getItem("Token");
    console.log(token);
    const Data = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${react}/${id}/react/${emoji}`, Data);
    if (!response.ok) {
      return response.text("error");
    }

    throw new Error("Something went wrong.");
    console.log(response);
    const link = await response.json();
    console.log(link);
  } catch (error) {
    console.log(error);
  }
}
