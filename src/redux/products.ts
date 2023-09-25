import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productsByCategory: [],
    product: 0,
    latest: 0,
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload.products;
    },
    getProductsByCategory: (state, action) => {
      state.productsByCategory = action.payload.products;
    },
    getProduct: (state, action) => {
      state.product = action.payload;
    },
    getLatest: (state, action) => {
      state.latest = action.payload;
    },
  },
});

// actions
export const { getProducts, getProductsByCategory, getProduct, getLatest } =
  productsSlice.actions;

// reducer
export default productsSlice.reducer;
