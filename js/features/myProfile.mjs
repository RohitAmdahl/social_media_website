import { getFollowProfilelink } from "../api/auth/API_endpoints.mjs";

import { BASE_URL } from "../api/auth/API_endpoints.mjs";

const cardModel = document.getElementById("cards");

async function Post(url) {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);

    console.log(token);
    const createData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(data),
    };

    const response = await fetch(url, createData);
    console.log(response);
    const results = await response.json();
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

Post(`${BASE_URL}/api/v1/social/profiles/${id}`);
//
// results.forEach((items) => {
//   console.log(items);
//   const cardWrapper = document.createElement("div"); // card
//   cardWrapper.classList.add(
//     "col-12",
//     "col-lg-12",
//     "col-md-12",
//     "col-sm-12"
//   );

//   const cardItem = document.createElement("div"); // card
//   cardItem.classList.add("card", "m-5", "p-5");

//   const image = document.createElement("img"); // image
//   // image.src = "/image/profile/profile icon.png";
//   // image.setAttribute(
//   //   "onerror",
//   //   (onerror = "this.src='/image/profile/profile icon.png';")
//   // );
//   image.classList.add("d-flex", "img-thumbnail", "p-2", "mb-2", "mx-auto");
//   // image.setAttribute("src", items.author.avatar);

//   const newCard = document.createElement("div"); // card-body
//   newCard.className = "card-body";
//   const NameOfTittle = document.createElement("h5");
//   NameOfTittle.className = "text-muted";
//   NameOfTittle.classList.add("mb-2", "p-5", "m-5", "card-title");
//   NameOfTittle.innerText = items.title;
//   const subtitle = document.createElement("h6");

//   subtitle.classList.add("card-subtitle", "mb-2", "p-2", "text-muted");
//   const paraGraph_text = document.createElement("p");
//   paraGraph_text.className = "card-text";
//   paraGraph_text.classList.add("mb-2", "p-2", "mb-2", "card-text");
//   paraGraph_text.innerText = items.body;
//   const img = document.createElement("img");
//   img.setAttribute("src", items.media);
//   img.classList.add(
//     "d-flex",
//     "img-thumbnail",
//     "mb-2",
//     "p-2",
//     "mb-2",
//     "media-img"
//   );
//   const span = document.createElement("span");
//   const _reactions = document.createElement("span");
//   _reactions.innerText = "reaction" + items._count.reactions;
//   _reactions.classList.add("card-subtitle", "mb-2", "p-2", "text-muted");
//   span.classList.add("card-subtitle", "mb-2", "p-2", "text-muted");
//   // span.innerText = "comments" + items.comments.length;
//   const button = document.createElement("button");

//   button.classList.add("cta_btn", "m-5");
//   button.innerText = "comment";
//   console.log(button);

//   const viewPost = document.createElement("a");
//   viewPost.innerText = "View Post";
//   viewPost.classList.add("cta_btn", "m-5");
//   viewPost.setAttribute("id", "view_post");
//   viewPost.href = `specific.html?id=${items.id}`;
//   //
//   cardModel.appendChild(cardWrapper);
//   cardWrapper.appendChild(cardItem);
//   cardItem.appendChild(NameOfTittle);
//   cardItem.appendChild(subtitle);
//   cardItem.appendChild(paraGraph_text);
//   cardItem.appendChild(img);
//   cardItem.appendChild(span);
//   cardItem.appendChild(_reactions);

//   cardItem.appendChild(viewPost);

//   let date = `${items.created}`;
//   let update = date.substring(0, 10);
//   subtitle.innerText = update;
// });

// function setDefaultImage(source) {
//   var badImg = new Image();
//   badImg.src = "/image/profile/profile icon.png";
//   var cpyImg = new Image();
//   cpyImg.src = source.src;

//   if (!cpyImg.width) {
//     source.src = badImg.src;
//   }
// }

// function onImgError(source) {
//   source.src = items.media;
//   source.onerror = "/image/profile/profile icon.png";
//   return true;
// }
// onImgError(onImgError(source));
//
