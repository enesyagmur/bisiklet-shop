import { configureStore } from "@reduxjs/toolkit";
import componentsSlice from "./slice";

export const store = configureStore({
  reducer: {
    components: componentsSlice,
  },
});
