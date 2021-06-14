import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from './CanvasSlice'

export default configureStore({
  reducer: {
    canvas: canvasReducer
  }
});
