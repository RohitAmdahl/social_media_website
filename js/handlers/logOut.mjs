export function ProfileLogOut() {
  const logOut = document.getElementById("log-out-cta");
  logOut.addEventListener("click", (e) => {
    console.log("object");
    localStorage.removeItem("Token");
    localStorage.removeItem("profile");
  });
}
