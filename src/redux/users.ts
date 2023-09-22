import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: 0,
  },
  reducers: {
    register: (state, action) => {
      localStorage.setItem(
        "ecommerce-user",
        JSON.stringify({ ...action.payload })
      );
      state.user = action.payload.admin[0];
    },
    loginUser: (state, action) => {
      localStorage.setItem(
        "ecommerce-user",
        JSON.stringify({ ...action.payload })
      );
      state.user = action.payload.admin[0];
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      localStorage.clear();
      state.user = 0;
    },
  },
});

// actions
export const { loginUser, updateUser, logoutUser } = usersSlice.actions;

// reducer
export default usersSlice.reducer;
