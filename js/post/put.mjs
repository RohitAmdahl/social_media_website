const method = "put";

async function updatePost() {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);

    const updateData = {
      method,
      headers: {
        "Content-type": "application/json ",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(),
    };

    const response = await fetch(url, updateData);

    console.log(response);
    const json = await response.json();
    console.log(json);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

update();
