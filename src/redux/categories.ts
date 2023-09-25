import { createSlice } from "@reduxjs/toolkit";

// Define the structure of a category object
interface Categories {
  category_id: number;
  name: string;
  proprieties: Record<string, any>;
}

// Define your state interface
interface CategoriesState {
  categories: Categories[];
  category: number;
}

// Create your initial state
const initialState: CategoriesState = {
  categories: [],
  category: 0,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    getCategory: (state, action) => {
      state.category = action.payload;
    },
    // updatedCategory: (state, action) => {
    //   state.categories = state.categories.map((cat) =>
    //     cat.category_id === action.payload.category_id ? action.payload : cat
    //   );
    // },
  },
});

// actions
export const { getCategories, getCategory } = categoriesSlice.actions;

// reducer
export default categoriesSlice.reducer;
