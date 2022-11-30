const form = document.querySelector("#product-form");

const title = document.querySelector("#title");
const tech = document.querySelector("#tech");
const link = document.querySelector("#link");
const description = document.querySelector("#description");

form.addEventListener("submit", addProduct);

async function addProduct(e) {
  e.preventDefault();

  const titleValue = title.value.trim();
  const techValue = tech.value.trim();
  const linkValue = link.value.trim();
  const descriptionValue = description.value.trim();

  const url = baseUrl + "api/projects";
  const data = JSON.stringify({
    data: {
      title: titleValue,
      tech: techValue,
      link: linkValue,
      description: descriptionValue,
    },
  });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  };
  message.innerHTML = "";

  if (
    (titleValue.length === 0 && techValue.length === 0) ||
    linkValue.length === 0 ||
    descriptionValue.length === 0
  ) {
    displayMessage(
      "warning",
      "Please fill up all the fields",
      ".message-container"
    );
  } else if (
    titleValue.length !== 0 &&
    techValue.length !== 0 &&
    linkValue.length !== 0 &&
    descriptionValue.length !== 0
  ) {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.error);

      if (result.data.attributes.createdAt) {
        displayMessage("success", "Project added", ".message-container");
        form.reset();
      }
      if (result.error) {
        displayMessage("error", result.error.message, ".message-container");
      }
    } catch (error) {
      console.log(error);
      displayMessage("error", "An error occured", ".message-container");
    }
  }
}

///

const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
  saveTostorage(tokenKey, token);
}

export function getToken() {
  return getFromStorage(tokenKey);
}

export function saveUser(user) {
  saveTostorage(userKey, user);
}

export function getUserName() {
  const user = getFromStorage(userKey);
  if (user) {
    return user.username;
  } else {
    null;
  }
}

function saveTostorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return [];
  } else {
    return JSON.parse(value);
  }
}

export const universalReset = () => {
  if (form.password.value && form.name.value && form.email.value === form) {
  }

  // return window.location.replace("/profile.html");
};
