import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const fetchPosts = () => axios.get(baseUrl + "/posts");
export const fetchUsers = () => axios.get(baseUrl + "/users");
