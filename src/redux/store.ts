import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

// reducers
import adminsReducer from "./admins";
import usersReducer from "./users";
import cartsReducer from "./carts";
import wishlistsReducer from "./wishlists";
import categoriesReducer from "./categories";
import productsReducer from "./products";
import featuredReducer from "./featured";
// orders and order details

// persist config
const persistConfig = {
  key: "root",
  storage,
};

// combine reducers
const rootReducer = combineReducers({
  admins: adminsReducer,
  users: usersReducer,
  carts: cartsReducer,
  wishlists: wishlistsReducer,
  categories: categoriesReducer,
  products: productsReducer,
  featured: featuredReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
