import Board from "./components/Board";
import { useDispatch } from "react-redux";
import { canvasActions } from "./store/CanvasSlice";
import Graph from "./components/renderless/Graph";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  dispatch(canvasActions.initialize());
  // }, [dispatch]);

  return (
    <>
      <Graph />
      <Board />
    </>
  );
}

export default App;
