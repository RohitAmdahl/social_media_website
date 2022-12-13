export const BASE_URL = "https://nf-api.onrender.com";
export const registerURL = "/api/v1/social/auth/register";
export const POSTregisterURL = `${BASE_URL}${registerURL}`;

export const LoginAuth = "/api/v1/social/auth/login"; // for register form url
export const LoginAuthUser = `${BASE_URL}${LoginAuth}`; // login form url

export const getPostURL = `${BASE_URL}/api/v1/social/posts?_author=true&_comments=true&_reactions=true`;

export const PostURL = `/api/v1/social/profiles`; // browse people profile
export const PostAccount = `${BASE_URL}${PostURL}`; // browse people profile

export const makePost = `${BASE_URL}/api/v1/social/posts`; // create entry

export const singleProfile = `${BASE_URL}/api/v1/social/posts`;

export const commentONprofile = `${BASE_URL}/api/v1/social/posts`;

export const removePost = `${BASE_URL}/api/v1/social/posts`;

export const UPDATE_URL = `${BASE_URL}/api/v1/social/posts`;

export const followProfile = `${BASE_URL}/api/v1/social/profiles`;

export const UNfolloWProfile = `${BASE_URL}/api/v1/social/profiles/<name>/follow`;

export const avatarURL = `${BASE_URL}/api/v1/social/profiles`;

export const react = `${BASE_URL}/api/v1/social/posts`;
