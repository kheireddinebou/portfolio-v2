import { configureStore } from "@reduxjs/toolkit";
import activeSecReducer from "./activeSecSlice";

const store = configureStore({
  reducer: {
    activeSec: activeSecReducer,
  },
});

export default store;
