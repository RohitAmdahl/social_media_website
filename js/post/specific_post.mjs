import { singleProfile } from "../api/auth/API_endpoints.mjs";
console.log(singleProfile);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);
const div = document.querySelector("#card");
console.log(div);
async function singlePost() {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);
    const createData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(`${singleProfile}/${id}`, createData);
    console.log(response);
    const link = await response.json();
    console.log({ link });

    const card = document.querySelector("#card");

    const img = document.createElement("img");
    img.src = link.media;

    card.appendChild(img);

    //----
    //---
  } catch (error) {
    console.log(error);
  }
}
singlePost();

//     const response = await fetch(`${singleProfile}${id}?_author=true&_comments=true&_reactions=true`, createData);
//     const link = await response.json();
//     const main = document.querySelector("main");
//     main.innerHTML +=
//   } catch (error) {
//     console.log(error);
//   }
// }
// singlePost();
// const getSingleProfile = (id) => `${BASE_URL}/api/v1/social/posts/${id};
