import { createSlice } from "@reduxjs/toolkit";

// Define the structure of a cart object
interface Wishlists {
  wishlist_id: number;
  user_id: number;
  product_id: number;
}

// Define your state interface
interface CartsState {
  wishlists: Wishlists[];
}

// Create your initial state
const initialState: CartsState = {
  wishlists: [],
};

export const wishlistsSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    getWishlists: (state, action) => {
      state.wishlists = action.payload.carts;
    },
    deletedWishlists: (state, action) => {
      state.wishlists = state.wishlists.filter(
        (wl) => wl.wishlist_id !== action.payload
      );
    },
    clearWishlists: (state, _action) => {
      state.wishlists = [];
    },
  },
});

// actions
export const { getWishlists, deletedWishlists, clearWishlists } =
  wishlistsSlice.actions;

// reducer
export default wishlistsSlice.reducer;
