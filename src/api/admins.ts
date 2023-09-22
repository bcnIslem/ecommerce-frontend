import API from "./index";

// log in
export const logInAdmin = (data: any) => API.post("/users/login/admin", data);
// add admin
export const addAdmin = (data: any) => API.post("/users/add/admin", data);
