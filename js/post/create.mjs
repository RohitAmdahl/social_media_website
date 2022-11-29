import { makePost } from "../api/auth/API_endpoints.mjs";
console.log(makePost);

const method = "post";

export async function createPost(url, post) {
  // console.log("URL and Data", url);
  try {
    const token = localStorage.getItem("Token");
    console.log(token);

    // const token = JSON.parse(localStorage.getItem("token"));
    //
    const database = {
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

    const response = await fetch(makePost, database);
    console.log(response);
    const json = await response.json();
    console.log(json);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// const createDData = createPost(makePost);
// createPost();
