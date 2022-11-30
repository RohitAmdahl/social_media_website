console.log(makePost);
import { makePost } from "../api/auth/API_endpoints.mjs";
import { load } from "../storage/localstorage.mjs";

const method = "post";
export async function createPost(url, post) {
  try {
    const token = load("token");
    console.log(token);
    const data = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: post.tittle,
        body: post.body,
        // tags: post.tag,
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

//..................................................................
