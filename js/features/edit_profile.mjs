import { avatarURL } from "../api/auth/API_endpoints.mjs";
const profile = localStorage.getItem("profile");
const profileName = JSON.parse(profile).name;
console.log(profileName);

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
  } catch (error) {
    console.log(error);
  }
}
