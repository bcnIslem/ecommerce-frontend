import { createSlice } from "@reduxjs/toolkit";

// Define the structure of a cart object
interface Carts {
  cart_id: number;
  user_id: number;
  product_id: number;
  items: number;
  amount: number;
}

// Define your state interface
interface CartsState {
  carts: Carts[];
}

// Create your initial state
const initialState: CartsState = {
  carts: [],
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    getCarts: (state, action) => {
      state.carts = action.payload.carts;
    },
    updatedCarts: (state, action) => {
      state.carts = state.carts.map((cart) =>
        cart.cart_id === action.payload.cart_id ? action.payload : cart
      );
    },
    deletedCart: (state, action) => {
      state.carts = state.carts.filter(
        (cart) => cart.cart_id !== action.payload
      );
    },
    clearCart: (state, _action) => {
      state.carts = [];
    },
  },
});

// actions
export const { getCarts, updatedCarts, deletedCart, clearCart } =
  cartsSlice.actions;

// reducer
export default cartsSlice.reducer;
