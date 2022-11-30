import { commentONprofile } from "../api/auth/API_endpoints.mjs";
console.log(commentONprofile);

const button = document.querySelector(".cta_btn");
console.log(button);

form.addEventListener("submit", (e) => {
  console.log(e);
  const form = e.target;

  const input = form.input.value;

  const message = { form, input };

  console.log(message);

  commentPost(commentONprofile, message);
});

async function commentPost(url, send) {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);
    const Data = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        body: send.body,
      }),
    };
    const response = await fetch(commentONprofile, Data);
    console.log(response);
    const link = await response.json();
    console.log(link);
  } catch (error) {
    console.log(error);
  }
}
