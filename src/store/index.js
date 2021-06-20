import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from "./CanvasSlice";

const store = configureStore({
  reducer: {
    canvas: canvasReducer,
  },
});

export default store;
