import { createSlice } from "@reduxjs/toolkit";
import { indexToXy, xyToIndex } from "../utils/position";
import { Data } from "../utils/constants";

export const canvasSlice = createSlice({
  name: "canvas",
  initialState: {
    resolution: [40, 20],
    canvas: [],
    canvasChanged: false,
    source: [0, 0],
    target: [0, 1],
  },
  reducers: {
    // initializes the canvas.canvas array based on resolution
    initialize(state) {
      const size = state.resolution[0] * state.resolution[1];
      state.canvas = [];
      for (let i = 0; i < size; i++) {
        state.canvas.push(Data.White);
      }
      state.canvasChanged = true;
      state.canvas[0] = Data.Source;
      state.canvas[size - 1] = Data.Target;
      state.source = [0, 0];
      state.target = [state.resolution[0] - 1, state.resolution[1] - 1];
    },
    // moves the source position
    moveSource(state, { payload }) {
      state.canvas[xyToIndex(state.source, state.resolution)] = Data.White;
      if (typeof payload === "object") {
        state.canvas[xyToIndex(payload)] = Data.Source;
        state.source = payload;
      } else {
        state.canvas[payload] = Data.Source;
        state.source = indexToXy(payload, state.resolution);
      }
      state.canvasChanged = true;
    },
    // moves the target position
    moveTarget(state, { payload }) {
      state.canvas[xyToIndex(state.target, state.resolution)] = Data.White;
      if (typeof payload === "object") {
        state.canvas[xyToIndex(payload)] = Data.Target;
        state.target = payload;
      } else {
        state.canvas[payload] = Data.Target;
        state.target = indexToXy(payload, state.resolution);
      }
      state.canvasChanged = true;
    },
    addWalls(state, { payload }) {
      if (state.canvas[payload] === Data.White) {
        state.canvas[payload] = Data.Black;
        state.canvasChanged = true;
      }
    },
    remWalls(state, { payload }) {
      if (state.canvas[payload] === Data.Black) {
        state.canvas[payload] = Data.White;
        state.canvasChanged = true;
      }
    },
    setData(state, { payload }) {
      const [index, data] = payload;
      // if (isObj(state.canvas[index]))
      //   throw new Error("Cannot mutate Obj slots using setData");
      state.canvas[index] = data;
    },
    resetCanvasChanged(state) {
      state.canvasChanged = false;
    },
  },
});

export const canvasActions = canvasSlice.actions;

export default canvasSlice.reducer;
