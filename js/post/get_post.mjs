import { getPostURL } from "../api/auth/API_endpoints.mjs";
console.log(getPostURL);
import { react } from "../api/auth/API_endpoints.mjs";

const cardModel = document.getElementById("cards");

async function Post() {
  try {
    const token = localStorage.getItem("Token");

    const createData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(getPostURL, createData);

    const results = await response.json();
    console.log(results);

    //
    function renderPost() {
      results.map((items, allPost) => {
        console.log(items, allPost);
        const cardWrapper = document.createElement("div"); // card
        cardWrapper.classList.add(
          "col-12",
          "col-lg-12",
          "col-md-12",
          "col-sm-12"
        );

        const cardItem = document.createElement("div"); // card
        cardItem.classList.add(
          "card",
          "m-5",
          "p-5",
          "bg-white",
          "shadow",
          "rounded",
          "overflow-hidden",
          "m-5"
        );

        const image = document.createElement("img"); // image
        // image.src = "/image/profile/profile icon.png";

        image.classList.add(
          "d-flex",
          "img-thumbnail",
          "p-2",
          "mb-2",
          "mx-auto"
        );
        image.setAttribute("src", items.author.avatar);

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
        _reactions.innerText = "reaction 👍," + items._count.reactions;
        _reactions.classList.add("card-subtitle", "mb-2", "p-2", "text-muted");
        span.classList.add("card-subtitle", "mb-2", "p-2", "text-muted");
        span.innerText = "comments 💬" + items.comments.length;
        const button = document.createElement("button");

        button.classList.add("cta_btn", "m-5");
        button.innerText = "comment";

        const viewPost = document.createElement("a");
        viewPost.innerText = "View Post";
        viewPost.classList.add("cta_btn", "m-5");
        viewPost.setAttribute("id", "view_post");
        viewPost.href = `specific.html?id=${items.id}`;

        //

        const cta_div = document.createElement("div");

        cardModel.appendChild(cardWrapper);
        cardWrapper.appendChild(cardItem);
        cardItem.appendChild(NameOfTittle);
        cardItem.appendChild(subtitle);
        cardItem.appendChild(paraGraph_text);
        cardItem.appendChild(img);
        cardItem.appendChild(span);
        cardItem.appendChild(_reactions);

        const UserReaction = document.createElement("button");
        UserReaction.classList.add("cta_btn", "m-5");
        UserReaction.innerText = "Like post";

        UserReaction.addEventListener("click", async () => {
          try {
            const token = localStorage.getItem("Token");
            console.log(token);
            const sendData = {
              symbol: "👍",
            };
            const Data = {
              method: "put",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },

              body: JSON.stringify(sendData),
            };
            const response = await fetch(`${react}/${items.id}/react/👍`, Data);
            console.log(response);
            const link = await response.json();
            console.log(link);
          } catch (error) {
            console.log(error);
          }
        });

        let date = `${items.created}`;
        let update = date.substring(0, 10);
        subtitle.innerText = update;

        cardItem.appendChild(cta_div);
        cta_div.appendChild(viewPost);
        cta_div.appendChild(UserReaction);
      });
    }

    //...

    // function renderPost(products) {
    //   const renderContainer = document.querySelector("renderCards");
    //   if (!Array.isArray(products) || product.length === 0) {
    //     return (renderContainer.innerHTML = "Sorry no  post to display");
    //   }
    // }

    // function createRender(cardModel, products) {
    //   // cardModel.innerHTML = "";
    //   json.forEach((element) => {
    //     renderPost();
    //   });
    // }

    // function FilterPost(postOfFeeds) {
    //   const searchPost = document.querySelector("#search");
    //   searchPost.addEventListener("input", (event) => {
    //     e.preventDefault();
    //     filterProducts(event.target.value, products);
    //     console.log(product);
    //   });
    // }
    // FilterPost();
    // const filterProducts = results.filter((products) => {
    //   if (products.post <= products.post) {
    //     renderPost();
    //   }
    // });

    //--
    renderPost();
  } catch (error) {
    console.log(error);
  }
}

Post();
