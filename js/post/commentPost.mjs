import { commentONprofile } from "../api/auth/API_endpoints.mjs";
console.log(commentONprofile);

export async function commentPost(url, text) {
  console.log(text);
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
        body: text.value,
      }),
    };
    const response = await fetch(url, Data);
    console.log(response);
    const link = await response.json();
    console.log(link);
  } catch (error) {
    console.log(error);
  }
}
