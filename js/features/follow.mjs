import { followProfile } from "../api/auth/API_endpoints.mjs";
import { getIDParam } from "../utils/id_prams.mjs";
async function followProfile() {
  const id = getIDParam(id);

  try {
    const follow = "${name}";
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
      `${followProfile}/${follow}/profile`,
      followData
    );
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
