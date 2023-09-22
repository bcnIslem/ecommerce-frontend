import API from "./index";

// get all
export const getAllWishlists = (userId: string) =>
  API.get(`/wishlists/all/${userId}`);
// add
export const addWishlist = (data: any) => API.post("/wishlists/add", data);
// delete
export const deleteWishlist = (id: string) =>
  API.delete(`/wishlists/delete/${id}`);
// delete all
export const deleteAllWishlists = (userId: string) =>
  API.delete(`/wishlists/delete/user/${userId}`);
