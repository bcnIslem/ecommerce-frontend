import { createSlice } from "@reduxjs/toolkit";

export const featuredSlice = createSlice({
  name: "featured",
  initialState: {
    featured: [],
  },
  reducers: {
    getFeatured: (state, action) => {
      state.featured = action.payload;
    },
  },
});

// actions
export const { getFeatured } = featuredSlice.actions;

// reducer
export default featuredSlice.reducer;
