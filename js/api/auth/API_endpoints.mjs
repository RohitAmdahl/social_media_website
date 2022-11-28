export const BASE_URL = "https://nf-api.onrender.com";
export const registerURL = "/api/v1/social/auth/register";
export const POSTregisterURL = `${BASE_URL}${registerURL}`;

export const LoginAuth = "/api/v1/social/auth/login"; // for register form url
export const LoginAuthUser = `${BASE_URL}${LoginAuth}`; // login form url

export const getPostURL = `${BASE_URL}/api/v1/social/posts`; // post for fetch

export const PostURL = `/api/v1/social/profiles`; // browse people profile
export const PostOFFeeds = `${BASE_URL}${PostURL}`; // browse people profile

// export const creatDate = `${BASE_URL}${PostURL}`;
