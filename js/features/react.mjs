import { react } from "../api/auth/API_endpoints.mjs";
console.log(react);

export async function likeAPost() {
  const emoji = "👍";
  try {
    const token = localStorage.getItem("Token");
    console.log(token);
    const Data = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(),
    };
    const response = await fetch(`${react}/${id}/react/${emoji}`, Data);
    console.log(response);
    const link = await response.json();
    console.log(link);
  } catch (error) {
    console.log(error);
  }
}
