import axios from "axios";

export const API = axios.create({ baseURL: "http://localhost:4001" });

// req token
API.interceptors.request.use((req) => {
  if (localStorage.getItem("ecommerce-user")) {
    req.headers.token = `Bearer ${
      JSON.parse(localStorage.getItem("ecommerce-user")!).token
    }`;
  }
  return req;
});
export default API;

// localhost path
export const PATH = "http://localhost:4001/";
