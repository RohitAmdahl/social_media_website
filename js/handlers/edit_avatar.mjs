import { avatarURL } from "../api/auth/API_endpoints.mjs";
import { editAvatar } from "../features/edit_profile.mjs";

const form = document.querySelector("#update_profile");
console.log(form);

function editPicture() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    const form = e.target;
    const data = form.value;
    console.log(avatar);
    const picture_edit = { avatar, form };

    console.log(avatar);

    editAvatar(data);
  });
}
editPicture();
