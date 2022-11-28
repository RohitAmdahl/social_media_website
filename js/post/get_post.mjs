import { getPostURL } from "../api/auth/API_endpoints.mjs";
console.log(getPostURL);
//
const cardsElement = document.getElementById("cards");
console.log(cardsElement);

//
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
    // if (!response.ok) {
    //   throw new Error(`HTTP error: ${response.status}`);
    // }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

Post();

// `<div class="col-12 col-lg-5 col-md-12 col-sm-12">
//               <div class="card">
//                 <img
//                   src="/image/profile/profile-pic 1.png"
//                   alt=""
//                   class="d-flex img-thumbnail p-2 mb-2 mx-auto"
//                 />
//                 <div class="card-body">
//                   <h5 class="card-title">Name</h5>
//                   <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//                   <p class="card-text">
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </p>
//                   <img
//                     src="/image/pictures/pic-6.jpg"
//                     alt=""
//                     class="d-flex img-thumbnail p-2 mb-2 mx"
//                   />
//                   <button class="cta_btn">Likes</button>
//                   <button class="cta_btn">Comment</button>
//                 </div>
//               </div>
//             </div>`;
