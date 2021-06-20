import store from "../../store";
import { canvasActions } from "../../store/CanvasSlice";

export default async function () {
  console.log("hi");
  setTimeout(() => {
    store.dispatch(canvasActions.addWalls(10));
  }, 500);
}
