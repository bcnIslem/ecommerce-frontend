import API from "./index";

// get all
export const getAllCategories = () => API.get("/categories/all");
// get by id
export const getCategoryById = (id: string) =>
  API.get(`/categories/single/${id}`);
// add
export const addCategory = (data: any) => API.post("/categories/add", data);
// update
export const updateCategory = (id: string, data: any) =>
  API.put(`/categories/update/${id}`, data);
// delete
