const mainDiv = document.getElementById("cards");
console.log(mainDiv);

const div = document.createElement("div");
div.className = "card";
const img = document.createElement("img");
img.setAttribute("src", "postImg");
const anotherDiv = document.createElement("div");
anotherDiv.classList.add("card-body");
const title = document.createElement("h5");
title.className = "card-title";
const title_text = document.createElement("h6");
title_text.classList.add("card-subtitle", "mb-2", "text-muted");
const pText = document.createElement("p");
pText.className = "card-text";
const img_1 = document.createElement("img");
img_1.setAttribute("src", "post_img_img");
const button = document.createElement("button");
button.className = "cta_btn";
const button_1 = document.createElement("button");
button_1.className = "cta_btn";

// title.innerText = item.title;
// img.src = item.media;

// cardsElement.appendChild(title);
// cardsElement.appendChild(img);

//  <div class="card">
//       <img
//         src="${item.media}"
//         alt=""
//         class="d-flex img-thumbnail p-2 mb-2 mx-auto"
//       />
//       <div class="card-body">
//         <h5 class="card-title">${item.title}</h5>
//         <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//         <p class="card-text">
//         ${item.body}
//         </p>
//         <img
//           src="${item.media}"
//           alt=""
//           class="d-flex img-thumbnail p-2 mb-2 mx"
//         />
//         <button class="cta_btn">Likes</button>
//         <button class="cta_btn">Comment</button>
//       </div>
//     </div>`
