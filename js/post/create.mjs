import { makePost } from "../api/auth/API_endpoints.mjs";
console.log(makePost);

const method = "post";
export async function createPost(url, post) {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);
    const data = {
      method,
      headers: {
        "Content-type": "application/json ",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: post.tittle,
        body: post.body,
        tags: post.tags,
        media: post.media,
      }),
    };

    const response = await fetch(makePost, data);
    console.log(response);
    const json = await response.json();
    console.log(json);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
