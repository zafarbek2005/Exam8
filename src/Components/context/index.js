import { configureStore } from "@reduxjs/toolkit";
import { api } from "./Api";
// import authSlice from "./slices/authSlice";
// import wishlistSlice from "./slices/wishlistSlice";
// import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    // auth: authSlice,
    // wishlist: wishlistSlice,
    // cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});