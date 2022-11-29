import { getPostURL } from "../api/auth/API_endpoints.mjs";
console.log(getPostURL);

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
    // console.log(json);
    results.forEach((items) => {
      const cardModel = document.querySelector(".card"); // card
      const image = document.createElement("img"); // image
      image.classList.add("d-flex", "img-thumbnail", "p-2", "mb-2", "mx-auto");
      image.setAttribute("src", items.author.avatar);
      image.setAttribute("src", "/image/pictures/pic-3.jpg");
      const newCard = document.createElement("div"); // card-body
      newCard.className = "card-body";
      const NameOfTittle = document.createElement("h5");
      NameOfTittle.className = "card-title";
      NameOfTittle.innerText = items.name;
      const subtitle = document.createElement("h6");
      subtitle.innerText = items.created;
      subtitle.classList.add("card-subtitle", "mb-2", "text-muted");
      const paraGraph_text = document.createElement("p");
      paraGraph_text.className = "card-text";
      paraGraph_text.innerText = items.body;
      const img = document.createElement("img");
      img.setAttribute("src", items.media);
      img.classList.add("d-flex", "img-thumbnail", "p-2", "mb-2 ");
      const span = document.createElement("span");
      span.className = "comments" + items.comments.length;
      const button = document.createElement("button");
      button.className = "cta_btn";
      button.innerText = "comment";
      console.log(button);
      //
      cardModel.appendChild(image);
      image.appendChild(newCard);
      newCard.appendChild(NameOfTittle);
      newCard.appendChild(subtitle);
      newCard.appendChild(paraGraph_text);
      newCard.appendChild(img);
      newCard.appendChild(span);
      newCard.appendChild(button);
    });

    //
  } catch (error) {
    console.log(error);
  }
}

Post();
