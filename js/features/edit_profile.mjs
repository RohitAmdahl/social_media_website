import { avatarURL } from "../api/auth/API_endpoints.mjs";
export async function editAvatar(url, data) {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);

    const sendData = {
      name: "${user.name}",
    };

    const followData = {
      method: "put",
      headers: {
        "Content-type": "application/json ",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    };

    const response = await fetch(
      `${avatarURL}/${user.name}/media`,
      sendData,
      followData
    );
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
