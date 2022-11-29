import { getPostURL } from "../api/auth/API_endpoints.mjs";
console.log(getPostURL);

const cardModel = document.getElementById("cards");

async function Post() {
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
    };
    const response = await fetch(getPostURL, createData);
    console.log(response);
    const results = await response.json();
    console.log(results);

    //
    results.forEach((items) => {
      console.log(items);
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
      image.setAttribute("src", items.author.avatar);

      const newCard = document.createElement("div"); // card-body
      newCard.className = "card-body";
      const NameOfTittle = document.createElement("h5");
      // NameOfTittle.className = ;
      NameOfTittle.classList.add("mb-2", "p-5", "m-5", "card-title");
      NameOfTittle.innerText = items.title;
      const subtitle = document.createElement("h6");

      subtitle.classList.add("card-subtitle", "mb-2", "p-2", "text-muted");
      const paraGraph_text = document.createElement("p");
      // paraGraph_text.className = "card-text";
      paraGraph_text.classList.add("mb-2", "p-2", "mb-2", "card-text");
      paraGraph_text.innerText = items.body;
      const img = document.createElement("img");
      img.setAttribute("src", items.media);
      img.classList.add("d-flex", "img-thumbnail", "mb-2", "p-2", "mb-2");
      const span = document.createElement("span");
      span.className = "comments" + items.comments.length;
      const button = document.createElement("button");
      const input = document.createElement("input");
      input.classList.add("form-control", "mb-2");

      button.classList.add("cta_btn", "m-5");
      button.innerText = "comment";
      console.log(button);
      //
      cardModel.appendChild(cardWrapper);
      cardWrapper.appendChild(cardItem);
      cardItem.appendChild(NameOfTittle);
      cardItem.appendChild(subtitle);
      cardItem.appendChild(paraGraph_text);
      cardItem.appendChild(img);
      cardItem.appendChild(span);
      cardItem.appendChild(input);
      cardItem.appendChild(button);

      let date = `${items.created}`;
      let update = date.substring(0, 10);
      subtitle.innerText = update;
    });

    //
  } catch (error) {
    console.log(error);
  }
}

Post();
