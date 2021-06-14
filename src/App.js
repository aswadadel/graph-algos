import Board from "./components/Board";
import { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { canvasActions } from './store/CanvasSlice'

function App() {
  const dispatch = useDispatch()

  // dispatch(canvasActions.moveSource([30, 15]))
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     let pos = [Math.round(Math.random()*40), Math.round(Math.random()*20)]
  //     dispatch(canvasActions.moveSource(pos))
  //   }, 400);
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [dispatch])

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
