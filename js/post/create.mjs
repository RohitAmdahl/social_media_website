import { makePost } from "../api/auth/API_endpoints.mjs";
// import { load } from "../storage/localstorage.mjs";

const method = "post";
export async function createPost(url, post) {
  console.log(post);
  try {
    const token = localStorage.getItem("Token");
    console.log(token);
    const data = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: post.title,
        body: post.body,
        // tags: post.tag,
        media: post.image,
      }),
    };

    const response = await fetch(makePost, data);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
//..................................................................
