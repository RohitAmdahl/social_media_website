import { singleProfile } from "../api/auth/API_endpoints.mjs";
console.log(singleProfile);
import { commentONprofile } from "../api/auth/API_endpoints.mjs";
import { commentPost } from "./commentPost.mjs";
import { likeAPost } from "../features/react.mjs";
import { react } from "../api/auth/API_endpoints.mjs";

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

    const formDiv = document.createElement("div");
    const FormBody = document.createElement("form");
    FormBody.setAttribute("id", "CommentTO_post");

    FormBody.addEventListener("submit", (e) => {
      const id = params.get("id");
      console.log(id);
      e.preventDefault();
      const FormBody = document.createElement("form");
      const data = FormBody.target.value;
      console.log(data);
      console.log(FormBody);
      const text = document.createElement("textarea");
      const value = text.value;
      console.log(text);
      const message = { data, value };

      console.log(message);
      commentPost(commentONprofile, message);
    });

    const text = document.createElement("textarea");
    const C_button = document.createElement("button");
    const like_button = document.createElement("button");

    //-like a post -
    like_button.addEventListener("click", (e) => {
      console.log("working");
      likeAPost(`${react}/${id}/react/emoji`);
    });
    //--
    like_button.classList.add("cta_btn_profile", "delete_post", "m-5");
    like_button.innerText = "React";
    cardItem.appendChild(formDiv);
    formDiv.appendChild(FormBody);
    text.classList.add("form-control");

    FormBody.appendChild(text);
    FormBody.appendChild(C_button);
    cardItem.appendChild(like_button);

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
