import { createSlice } from "@reduxjs/toolkit";
import { indexToXy } from "../utils/position";

export const canvasSlice = createSlice({
  name: "canvas",
  initialState: {
    resolution: [40, 20],
    canvas: [],
    source: [0, 0],
    targets: [],
  },
  reducers: {
    //initializes the canvas.canvas array based on resolution
    initialize(state) {
      const size = state.resolution[0] * state.resolution[1];
      // state.targets = [state.resolution[0] - 1, state.resolution[1] - 1];
      state.canvas = [];
      for (let i = 0; i < size; i++) {
        state.canvas.push("white");
      }
    },
    //moves the source position
    moveSource(state, { payload }) {
      if (typeof payload === "object") {
        state.source = payload;
      } else{
        state.source = indexToXy(payload, state.resolution)
      }
    },
  },
});

export const canvasActions = canvasSlice.actions;

export default canvasSlice.reducer;
