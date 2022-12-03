import { remove } from "../post/delete.mjs";
import { removePost } from "../api/auth/API_endpoints.mjs";

const delete_post = document.querySelectorAll(".delete_post");
console.log(delete_post);

remove(`${removePost}`);
