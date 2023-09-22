import API from "./index";

// get all products in a cart
export const getAllProductsInCart = (userId: string) =>
  API.get(`/carts/all/user/${userId}`);
// add product to cart
export const addProductToCart = (data: any) => API.post("/carts/add", data);
// update product in cart
export const updateProductInCart = (id: string, data: any) =>
  API.put(`/carts/update/${id}`, data);
// delete product from cart
export const deleteProductFromCart = (id: string) =>
  API.delete(`/carts/delete/${id}`);
// delete all products from cart 'clear cart'
export const deleteAllProductsFromCart = (userId: string) =>
  API.delete(`/carts/delete/user/${userId}`);
