import { createSlice } from "@reduxjs/toolkit";
import { indexToXy, xyToIndex } from "../utils/position";
import { Data } from "../utils/constants";

export const canvasSlice = createSlice({
  name: "canvas",
  initialState: {
    resolution: [40, 20],
    canvas: [],
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
      state.canvas[0] = Data.Obj;
      state.canvas[size - 1] = Data.Obj;
      state.source = [0, 0];
      state.target = [state.resolution[0] - 1, state.resolution[1] - 1];
    },
    // moves the source position
    moveSource(state, { payload }) {
      state.canvas[xyToIndex(state.source, state.resolution)] = Data.White;
      if (typeof payload === "object") {
        state.canvas[xyToIndex(payload)] = Data.Obj;
        state.source = payload;
      } else {
        state.canvas[payload] = Data.Obj;
        state.source = indexToXy(payload, state.resolution);
      }
    },
    // moves the target position
    moveTarget(state, { payload }) {
      state.canvas[xyToIndex(state.target, state.resolution)] = Data.White;
      if (typeof payload === "object") {
        state.canvas[xyToIndex(payload)] = Data.Obj;
        state.target = payload;
      } else {
        state.canvas[payload] = Data.Obj;
        state.target = indexToXy(payload, state.resolution);
      }
    },
    addWalls(state, { payload }) {
      if (state.canvas[payload] === Data.White)
        state.canvas[payload] = Data.Black;
    },
    remWalls(state, { payload }) {
      if (state.canvas[payload] === Data.Black)
        state.canvas[payload] = Data.White;
    },
    setData(state, {payload}){
      const [index, data] = payload
      if(state.canvas[index] === Data.Obj) throw "Cannot mutate Obj slots using setData"
      state.canvas[index] = data
    }
  },
});

export const canvasActions = canvasSlice.actions;

export default canvasSlice.reducer;
