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
    // here start a new cards

    //-------------here start a card

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
    span.innerText = "comments 💬" + link._count.comments;
    span_span.innerText = "reaction ,  " + link._count.reactions;

    //
    cardModel.appendChild(cardWrapper);
    cardWrapper.appendChild(cardItem);
    cardItem.appendChild(NameOfTittle);
    cardItem.appendChild(subtitle);
    cardItem.appendChild(paraGraph_text);
    cardItem.appendChild(img);
    cardItem.appendChild(span);
    cardItem.appendChild(span_span);
    // comment append
    const formDiv = document.createElement("div");
    const FormBody = document.createElement("form");
    const text = document.createElement("textarea");
    const C_button = document.createElement("button");

    const like_button = document.createElement("button");
    like_button.classList.add("cta_btn_profile", "delete_post", "m-5");
    like_button.innerText = "React";
    cardItem.appendChild(formDiv);
    formDiv.appendChild(FormBody);
    text.classList.add("form-control");

    FormBody.appendChild(text);
    FormBody.appendChild(C_button);
    FormBody.appendChild(like_button);

    C_button.innerText = "comment";
    C_button.classList.add("cta_btn_profile", "delete_post", "m-5");

    let date = `${link.created}`;
    let update = date.substring(0, 10);
    subtitle.innerText = update;

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
