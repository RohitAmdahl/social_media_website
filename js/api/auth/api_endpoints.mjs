export const BASE_URL = "https://nf-api.onrender.com";
export const registerURL = "/api/v1/social/auth/register";
export const POSTregisterURL = `${BASE_URL}${registerURL}`;

export const LoginAuth = "/api/v1/social/auth/login"; // for register form url
export const LoginAuthUser = `${BASE_URL}${LoginAuth}`; // login form url

export const getPostURL = `${BASE_URL}/api/v1/social/posts?_author=true&_comments=true&_reactions=true`; // post for fetch and createpost

export const PostURL = `/api/v1/social/profiles`; // browse people profile
export const PostOFFeeds = `${BASE_URL}${PostURL}`; // browse people profile

export const makePost = `${BASE_URL}/api/v1/social/posts`; // create entry

export const singleProfile = `${BASE_URL}/api/v1/social/posts/${id}`;

export const commentONprofile = `${BASE_URL}/api/v1/social/posts/?=id/comment`;

export const removePost = `${BASE_URL}/api/v1/social/posts`;

export const UPDATE_URL = `${BASE_URL}/api/v1/social/posts/`;

export const followProfile = `${BASE_URL}/api/v1/social/profiles/<name>/follow`;

export const UNfolloWProfile = `${BASE_URL}/api/v1/social/profiles/<name>/follow`;

export const EditBannerIMG = `${BASE_URL}/api/v1/social/profiles/<name>/media`;
