async function remove() {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);

    const deleteData = {
      method,
      headers: {
        "Content-type": "application/json ",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(),
    };

    const response = await fetch(url, deleteData);
    console.log(response);
    const json = await response.json();
    console.log(json);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

remove();
