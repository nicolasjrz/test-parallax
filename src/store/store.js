import { configureStore } from "@reduxjs/toolkit";
import { shopSlice } from "./slices/shopSlice";
import { cartSlice } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    shop: shopSlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
