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
    const cardModel = document.getElementById("card");

    const response = await fetch(`${singleProfile}/${id}`, createData);
    console.log(response);
    const link = await response.json();
    console.log({ link });

    const cardWrapper = document.createElement("div"); // card
    cardWrapper.classList.add("col-12", "col-lg-12", "col-md-12", "col-sm-12");
    const cardItem = document.createElement("div"); // card
    cardItem.classList.add("card", "m-5", "p-5");

    const image = document.createElement("img"); // image
    image.classList.add("d-flex", "img-thumbnail", "p-2", "mb-2", "mx-auto");
    // image.setAttribute("src", items.author.avatar);

    const newCard = document.createElement("div"); // card-body
    newCard.className = "card-body";
    const NameOfTittle = document.createElement("h5");
    NameOfTittle.className = link.title;
    NameOfTittle.classList.add("mb-2", "p-5", "m-5", "card-title");
    NameOfTittle.innerText = link.title;
    const subtitle = document.createElement("h6");

    subtitle.classList.add("card-subtitle", "mb-2", "p-2", "text-muted");
    const paraGraph_text = document.createElement("p");
    // paraGraph_text.className = "card-text";
    paraGraph_text.classList.add("mb-2", "p-2", "mb-2", "card-text");
    paraGraph_text.innerText = link.body;
    const img = document.createElement("img");
    img.src = link.media;
    img.classList.add(
      "d-flex",
      "img-thumbnail",
      "mb-2",
      "p-2",
      "mb-2",
      "media-img"
    );
    const span = document.createElement("span");
    const span_span = document.createElement("span");
    span.classList.add("card-subtitle", "mb-2", "p-2", "text-muted");
    span_span.classList.add("card-subtitle", "mb-2", "p-2", "text-muted");
    span.innerText = "comments" + link._count.comment;
    span_span.innerText = "reaction" + link._count.reaction;
    // button.classList.add("cta_btn", "m-5");
    // button.innerText = "comment";

    // const divForm = createElement("div");
    // const FormBody = createElement("form");
    // const text = createElement("textarea");
    // const button = document.createElement("button");
    //
    cardModel.appendChild(cardWrapper);
    cardWrapper.appendChild(cardItem);
    cardItem.appendChild(NameOfTittle);
    cardItem.appendChild(subtitle);
    cardItem.appendChild(paraGraph_text);
    cardItem.appendChild(img);
    cardItem.appendChild(span);
    cardItem.appendChild(span_span);
    // cardItem.appendChild(input);
    // cardItem.appendChild(button);
    // cardItem.appendChild(viewPost);

    let date = `${link.created}`;
    let update = date.substring(0, 10);
    subtitle.innerText = update;

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
