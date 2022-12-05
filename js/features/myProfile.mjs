import { BASE_URL } from "../api/auth/API_endpoints.mjs";
import { react } from "../api/auth/API_endpoints.mjs";

import { removePost } from "../api/auth/API_endpoints.mjs";

const profile = localStorage.getItem("profile");
const profileName = JSON.parse(profile).name;

// THis wont work. Because its set down here
// const deleteButton = document.getElementById("delete");

const profile_name = document.querySelector("#profile_name");
profile_name.innerText = profileName;

const cardModel = document.getElementById("cards");

async function Post(url) {
  try {
    const token = localStorage.getItem("Token");
    const createData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, createData);

    const results = await response.json();
    console.log(results);

    //
    results.forEach((items) => {
      const cardWrapper = document.createElement("div"); // card
      cardWrapper.classList.add(
        "col-12",
        "col-lg-12",
        "col-md-12",
        "col-sm-12"
      );

      const cardItem = document.createElement("div"); // card
      cardItem.classList.add("card", "m-5", "p-5");

      const image = document.createElement("img"); // image
      image.classList.add("d-flex", "img-thumbnail", "p-2", "mb-2", "mx-auto");
      // image.setAttribute("src", items.author.avatar);

      const newCard = document.createElement("div"); // card-body
      newCard.className = "card-body";
      const NameOfTittle = document.createElement("h5");
      NameOfTittle.className = "text-muted";
      NameOfTittle.classList.add("mb-2", "p-5", "m-5", "card-title");
      NameOfTittle.innerText = items.title;
      const subtitle = document.createElement("h6");

      subtitle.classList.add("card-subtitle", "mb-2", "p-2", "text-muted");
      const paraGraph_text = document.createElement("p");
      paraGraph_text.className = "card-text";
      paraGraph_text.classList.add("mb-2", "p-2", "mb-2", "card-text");
      paraGraph_text.innerText = items.body;
      const img = document.createElement("img");
      img.setAttribute("src", items.media);
      img.classList.add(
        "d-flex",
        "img-thumbnail",
        "mb-2",
        "p-2",
        "mb-2",
        "media-img"
      );
      const span = document.createElement("span");
      const _reactions = document.createElement("span");
      _reactions.innerText = "reaction" + items._count.reactions;
      _reactions.classList.add("card-subtitle", "mb-2", "p-2", "text-muted");
      span.classList.add("card-subtitle", "mb-2", "p-2", "text-muted");
      span.innerText = "comments 💬" + items._count.comments;
      const button = document.createElement("button");

      button.classList.add("cta_btn", "m-5");
      button.innerText = "comment";

      const viewPost = document.createElement("a");
      viewPost.innerText = "View Post";
      viewPost.classList.add("cta_btn", "m-5");
      viewPost.setAttribute("id", "view_post");
      viewPost.href = `specific.html?id=${items.id}`;
      //
      const button_d = document.createElement("button");
      button_d.innerText = "Delete Post";
      button_d.classList.add("cta_btn_profile", "delete_post", "m-5");
      button_d.setAttribute("id", "delete");
      const likeButton = document.createElement("button");
      likeButton.classList.add("cta_btn", "m-5");
      likeButton.innerText = "Like post";

      button_d.addEventListener("click", async () => {
        try {
          const token = localStorage.getItem("Token");
          console.log(token);

          const deleteData = {
            method: "delete",
            headers: {
              "Content-type": "application/json ",
              Authorization: `Bearer ${token}`,
            },
          };

          const response = await fetch(`${removePost}/${items.id}`, deleteData);
          console.log(response);
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.log(error);
        }
      });

      cardModel.appendChild(cardWrapper);
      cardWrapper.appendChild(cardItem);
      cardItem.appendChild(NameOfTittle);
      cardItem.appendChild(subtitle);
      cardItem.appendChild(paraGraph_text);
      cardItem.appendChild(img);
      cardItem.appendChild(span);
      cardItem.appendChild(_reactions);
      cardItem.appendChild(viewPost);
      cardItem.appendChild(likeButton);

      let date = `${items.created}`;
      let update = date.substring(0, 10);
      subtitle.innerText = update;
    });

    //
  } catch (error) {
    console.log(error);
  }
}

Post(`${BASE_URL}/api/v1/social/profiles/${JSON.parse(profile).name}/posts`);
