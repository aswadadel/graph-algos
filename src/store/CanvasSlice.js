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
    //initializes the canvas.canvas array based on resolution
    initialize(state) {
      const size = state.resolution[0] * state.resolution[1];
      state.canvas = [];
      for (let i = 0; i < size; i++) {
        state.canvas.push(Data.White);
      }
			state.canvas[0] = Data.Obj
      state.canvas[size-1] = Data.Obj
      state.source = [0,0]
      state.target = [state.resolution[0] - 1, state.resolution[1] - 1] 
      // canvasSlice.caseReducers.moveSource(state, {payload: [0,0]})
      // canvasSlice.caseReducers.moveTarget(state, {payload: [state.resolution[0] - 1, state.resolution[1] - 1]})
    },
    //moves the source position
    moveSource(state, { payload }) {
      state.canvas[xyToIndex(state.source, state.resolution)] = Data.White
      if (typeof payload === "object") {
        state.canvas[xyToIndex(payload)] = Data.Obj
        state.source = payload;
        
      } else {
        state.canvas[payload] = Data.Obj
        state.source = indexToXy(payload, state.resolution);
      }
    },
    moveTarget(state, { payload }) {
      state.canvas[xyToIndex(state.target, state.resolution)] = Data.White
      if (typeof payload === "object") {
        state.canvas[xyToIndex(payload)] = Data.Obj
        state.target = payload;
      } else {
        state.canvas[payload] = Data.Obj
        state.target = indexToXy(payload, state.resolution);
      }
    },
  },
});

export const canvasActions = canvasSlice.actions;

export default canvasSlice.reducer;
