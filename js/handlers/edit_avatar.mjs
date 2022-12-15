import { avatarURL } from "../api/auth/API_endpoints.mjs";
import { editAvatar } from "../features/edit_profile.mjs";

const form = document.querySelector("#update_profile");

function editPicture() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    const form = e.target;
    const avatarImage = form[0].value;
    editAvatar(avatarImage);
  });
}
editPicture();
