import { PostOFFeeds } from "../api/auth/API_endpoints.mjs";
import { followProfile } from "../api/auth/API_endpoints.mjs";
console.log(followProfile);
import { BASE_URL } from "../api/auth/API_endpoints.mjs";

async function profileOFPost() {
  try {
    const token = localStorage.getItem("Token");
    const createData = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(PostOFFeeds, createData);
    const json = await response.json();
    console.log(json);

    json.forEach((data) => {
      //
      const Div_container = document.querySelector(".Follow_followerS");

      const background = document.createElement("div");
      background.classList.add(
        "bg-white",
        "shadow",
        "rounded",
        "overflow-hidden",
        "m-5"
      );

      const cover = document.createElement("div");
      cover.classList.add("px-4", "pt-0", "pb-4", "cover");
      const item_center = document.createElement("div");
      item_center.classList.add("align-items-center", "m-2");
      const profile_img = document.createElement("img");
      profile_img.classList.add(
        "rounded",
        "mb-2",
        "img-thumbnail",
        "profile_page_img",
        "w-100"
      );
      profile_img.src = data.avatar;

      const profile_name = document.createElement("h4");
      profile_name.innerText = data.name;

      const email = document.createElement("p");
      email.innerText = data.email;
      const background_light = document.createElement("div");
      background_light.classList.add(
        "bg-light",
        "p-4",
        "d-flex",
        "justify-content-end",
        "text-center"
      );
      const ul = document.createElement("ul");
      ul.classList.add(
        "list-inline",
        "mb-0",
        "d-flex",
        "justify-content-center",
        "w-100"
      );

      const list = document.createElement("li");
      list.classList.add("list-inline-item");

      const number = document.createElement("h5");
      number.classList.add("font-weight-bold", "mb-1", "d-block");
      number.innerText = data._count.posts;

      const posts = document.createElement("small");
      posts.innerText = "posts";

      const list_sec = document.createElement("li");
      list_sec.classList.add("list-inline-item");

      const number_sec = document.createElement("h5");
      number_sec.innerText = data._count.followers;
      number.classList.add("font-weight-bold", "mb-0", "d-block");

      const followers = document.createElement("small");
      followers.classList.add("text-muted");
      followers.innerText = "followers";

      const list_three = document.createElement("li");
      list_three.classList.add("list-inline-item");

      const number_three = document.createElement("h5");
      number_three.classList.add("font-weight-bold", "mb-0", "d-block");
      number_three.innerText = data._count.following;

      const following = document.createElement("small");
      following.classList.add("text-muted");
      following.innerText = "following";

      const follow = document.createElement("button");
      follow.classList.add("cta_btn_profile");
      follow.innerText = "follow";

      follow.addEventListener("click", async () => {
        try {
          const token = localStorage.getItem("Token");
          console.log(token);

          const followData = {
            method: "put",
            headers: {
              "Content-type": "application/json ",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(),
          };

          const response = await fetch(
            `${followProfile}/${name}/profile`,
            followData
          );
          console.log(response);
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.log(error);
        }
      });

      //
      Div_container.appendChild(background);
      background.appendChild(item_center);
      item_center.appendChild(profile_img);
      item_center.appendChild(profile_name);
      item_center.appendChild(email);
      item_center.appendChild(background_light);
      background_light.appendChild(ul);
      ul.appendChild(list);
      ul.appendChild(number);
      ul.appendChild(posts);
      ul.appendChild(list_sec);
      ul.appendChild(number_sec);
      ul.appendChild(followers);
      ul.appendChild(list_three);
      ul.appendChild(number_three);
      ul.appendChild(following);
      ul.appendChild(follow);

      //

      //

      //
    });
  } catch (error) {
    console.log(error);
  }
}

profileOFPost();
