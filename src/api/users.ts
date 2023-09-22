import API from "./index";

// register
export const register = (data: any) => API.post("/users/register", data);
// log in
export const logInUser = (data: any) => API.post("/users/login/user", data);
// update info's
export const updateInfo = (data: any) => API.put("/users/update/:id", data);
// update password
export const updatePassword = (data: any) =>
  API.put("/users/update/password/:id", data);
// delete user
