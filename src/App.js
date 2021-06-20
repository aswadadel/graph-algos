import Board from "./components/Board";
import { useDispatch } from "react-redux";
import { canvasActions } from "./store/CanvasSlice";
import Index from "./utils/testers/Tester";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  dispatch(canvasActions.initialize());
  // }, [dispatch]);

  return (
    <>
      <Index />
      <Board />
    </>
  );
}

export default App;
