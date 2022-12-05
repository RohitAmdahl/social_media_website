import { followProfile } from "../api/auth/API_endpoints.mjs";
import { getIDParam } from "../utils/id_prams.mjs";
export async function followUser(profile) {
  try {
    const data = `${name}`;
    console.log(data);

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
      `${followProfile}/${profile.data}/follow`,
      followData
    );
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
