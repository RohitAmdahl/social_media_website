const cardModel = document.querySelector(".row"); // card

const image = document.createElement("img"); // image
image.classList.add("d-flex", "img-thumbnail", "p-2", "mb-2", "mx-auto");

const newCard = document.createElement("div"); // card-body
newCard.className = "card-body";

const NameOfTittle = document.createElement("h5");
NameOfTittle.className = "card-title";
NameOfTittle.innerText = "";

const subtitle = document.createElement("h6");
subtitle.innerText = "";

subtitle.classList.add("card-subtitle", "mb-2", "text-muted");
const paraGraph_text = document.createElement("p");
paraGraph_text.className = "card-text";

paraGraph_text.innerText = "";

const img = document.createElement("img");
// img.setAttribute("src");
img.classList.add("d-flex", "img-thumbnail", "p-2", "mb-2 ");
const span = document.createElement("span");
span.className = "numbers";
const button = document.createElement("button");
button.className = "cta_btn";
button.innerText = "comment";
console.log(button);

cardModel.appendChild(image);
image.appendChild(newCard);
newCard.appendChild(NameOfTittle);
newCard.appendChild(subtitle);
newCard.appendChild(paraGraph_text);
newCard.appendChild(img);
newCard.appendChild(span);
newCard.appendChild(button);
