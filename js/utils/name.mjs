import { StoredData } from "../storage/localstorage.mjs";
export function headers() {
  const token = StoredData("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}
export async function auth() {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}

// import { login } from "../api/auth/login.mjs";
// export function nameID() {
//   const name = document.querySelector("h1");
//   name.innerText = results.name;
// }
