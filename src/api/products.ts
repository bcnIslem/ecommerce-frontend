import API from "./index";

// get all
export const getAllProducts = () => API.get("/products/all");
// get latest
export const getLatestProduct = () => API.get("/products/all");
// get by id
export const getProductById = (id: string) => API.get(`/products/single/${id}`);
//   get all products by category
export const getProductsByCategory = (categoryId: string) =>
  API.get(`/products/category/${categoryId}`);
// add
export const addProduct = (data: any) => API.post("/products/add", data);
// update
export const updateProduct = (id: string, data: any) =>
  API.put(`/products/update/${id}`, data);
