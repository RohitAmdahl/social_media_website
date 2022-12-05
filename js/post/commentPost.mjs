import { commentONprofile } from "../api/auth/API_endpoints.mjs";
console.log(commentONprofile);
export async function commentPost(url, send) {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);
    const Data = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        body: send.body,
      }),
    };
    const response = await fetch(
      `${commentONprofile}/${send.id}/comment`,
      Data
    );
    console.log(response);
    const link = await response.json();
    console.log(link);
  } catch (error) {
    console.log(error);
  }
}
