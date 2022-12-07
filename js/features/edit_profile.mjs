import { avatarURL } from "../api/auth/API_endpoints.mjs";
const profile = localStorage.getItem("profile");
console.log(profile);
const profile_name = json.parse(profile).name;

console.log(profile_name);

export async function editAvatar(data) {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);

    const sendData = {
      avatar: data,
    };

    const followData = {
      method: "put",
      headers: {
        "Content-type": "application/json ",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(sendData),
    };

    const response = await fetch(`${avatarURL}/${data.name}/media`, followData);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
