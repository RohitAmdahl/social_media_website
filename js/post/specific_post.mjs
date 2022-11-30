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

    // const img = document.createElement("img");
    // img.src =

    const cardItem = document.createElement("div"); // card
    cardItem.classList.add("card", "m-5", "p-5");

    const image = document.createElement("img"); // image
    image.classList.add("d-flex", "img-thumbnail", "p-2", "mb-2", "mx-auto");
    // image.setAttribute("src", link.author.avatar);

    const newCard = document.createElement("div"); // card-body
    newCard.className = "card-body";
    const NameOfTittle = document.createElement("h5");
    // NameOfTittle.className =  ;

    NameOfTittle.classList.add("mb-2", "p-5", "m-5", "card-title");
    NameOfTittle.innerText = link.title;
    const subtitle = document.createElement("h6");

    subtitle.classList.add("card-subtitle", "mb-2", "p-2", "text-muted");
    const paraGraph_text = document.createElement("p");
    paraGraph_text.className = "card-text";
    paraGraph_text.classList.add("mb-2", "p-2", "mb-2", "card-text");
    // paraGraph_text.innerText = link.body;

    const img = document.createElement("img");
    // img.setAttribute("src", link.media);
    img.classList.add(
      "d-flex",
      "img-thumbnail",
      "mb-2",
      "p-2",
      "mb-2",
      "media-img"
    );
    const comments = document.createElement("p");
    // comments.className = "comments" + items.comments.length;
    const button = document.createElement("button");
    const input = document.createElement("input");
    input.classList.add("form-control", "mb-2");

    button.classList.add("cta_btn", "m-5");
    button.innerText = "comment";
    console.log(button);

    card.appendChild(img);
    card.appendChild(cardItem);

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
