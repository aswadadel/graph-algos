import { canvasActions } from "../store/CanvasSlice";
import store from "../store";
import { Data } from "./constants";
import { indexToXy, xyToIndex } from "./position";

export default class Node {
  static resolution = [40, 20];
  constructor(index, color = Data.White, predecessor = null, distance = null) {
    this.index = index;
    this.distance = distance;
    this._color = color;
    this.predecessor = predecessor;
  }
  static setResolution(resolution) {
    this.resolution = resolution;
  }
  get color() {
    return this._color;
  }
  set color(c) {
    this._color = c;
    store.dispatch(canvasActions.setData([this.index, c]));
  }
  get adj() {
    const directions = [
      [0, -1],
      [-1, 0],
      [0, 1],
      [1, 0],
    ];
    const pos = indexToXy(this.index, Node.resolution);

    const directedPos = [];
    for (let i = 0; i < directions.length; i++) {
      let direction = directions[i];
      let adjNode = pos.map((axis, index) => axis + direction[index]);
      if (
        adjNode[0] >= 0 &&
        adjNode[0] < Node.resolution[0] &&
        adjNode[1] >= 0 &&
        adjNode[1] < Node.resolution[1]
      ) {
        directedPos.push(adjNode);
      }
    }
    return directedPos.map((current) => {
      return xyToIndex(current, Node.resolution);
    });
  }
}
