import { avatarURL } from "../api/auth/API_endpoints.mjs";
const profile = JSON.parse(localStorage.getItem("profile"));
const profileName = profile.name;
/**
 * this function calls en api with put method
 *  api fetch with  accessToken,
 *@param {string} url
 *body: JSON.stringify(data),
 * const sendData = {
 *    avatar: avatarImage,
 *  };
 *
 *  const followData = {
 *    method: "put",
 *    headers: {
 *      "Content-type": "application/json ",
 *     Authorization: `Bearer ${token}`,
 *    },
 *    body: JSON.stringify(sendData),
 *  };
 *
 */

export async function editAvatar(avatarImage) {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);

    const sendData = {
      avatar: avatarImage,
    };

    const followData = {
      method: "put",
      headers: {
        "Content-type": "application/json ",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(sendData),
    };

    const response = await fetch(
      `${avatarURL}/${profileName}/media`,
      followData
    );
    console.log(response);
    const json = await response.json();
    console.log(json);
    document.querySelector("#profile_img").src = json.avatar;
    profile.avatar = json.avatar;
    localStorage.setItem("profile", JSON.stringify(profile));
  } catch (error) {
    console.log(error);
  }
}
