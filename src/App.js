import Board from "./components/Board";
import { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { canvasActions } from './store/CanvasSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(canvasActions.initialize())
  }, [dispatch])

  return (
    <>
      <Board/>
    </>
  );
}

export default App;
