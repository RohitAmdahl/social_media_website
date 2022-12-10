export function ProfileLogOut() {
  const logOut = document.getElementById("log-out-cta");
  console.log(logOut);
  logOut.addEventListener("click", (e) => {
    console.log("object");
    localStorage.removeItem("Token");
  });
}
