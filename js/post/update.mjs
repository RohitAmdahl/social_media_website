import { putUpdate } from "../api/auth/API_endpoints.mjs";
// console.log(putUpdate);
const method = "put";

export async function updatePost(url, post) {
  console.log(post);

  try {
    const token = localStorage.getItem("Token");
    console.log(token);

    const updateData = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        title: post.title,
        body: post.body,
        media: post.image,
        id: post.id,
      }),
    };

    const response = await fetch(`${putUpdate}${post.id}`, updateData);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
//..................................................................
