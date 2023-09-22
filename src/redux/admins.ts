import { createSlice } from "@reduxjs/toolkit";

export const adminsSlice = createSlice({
  name: "admins",
  initialState: {
    admins: [],
    admin: 0,
  },
  reducers: {
    loginAdmin: (state, action) => {
      localStorage.setItem(
        "ecommerce-user",
        JSON.stringify({ ...action.payload })
      );
      state.admin = action.payload.admin[0];
    },
    updateAdmin: (state, action) => {
      state.admin = action.payload;
    },
    logoutAdmin: (state) => {
      localStorage.clear();
      state.admin = 0;
    },
  },
});

// actions
export const { loginAdmin, updateAdmin, logoutAdmin } = adminsSlice.actions;

// reducer
export default adminsSlice.reducer;
