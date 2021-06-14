import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Square from "./Square";
import Source from "./Source";

import useSquareSize from "../hooks/squareSize";
// import { canvasActions } from "../store/CanvasSlice";
import { xyToIndex } from "../utils/position";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: ${(props) => props.width}px;
  max-height: ${(props) => props.width}px;
  margin: auto;
`;

function Board() {
  const resolution = useSelector((state) => state.canvas.resolution);
  const canvas = useSelector((state) => state.canvas.canvas);
  const source = useSelector((state) => state.canvas.source);

  // const dispatch = useDispatch();

  const size = useSquareSize();

  const sourceIndex = xyToIndex(source, resolution);

  // moves source to the square clicked
  // const handleSquareClick = (color, index) => {
  //   if (canMove(color)) {
  //     let pos = indexToXy(index, resolution);
  //     dispatch(canvasActions.moveSource(pos));
  //   }
  // };

  const squares = canvas.map((color, index) => {
    const sourceComp = index === sourceIndex ? <Source /> : null;
    return (
      <Square
        key={index}
        size={size}
        pos={index}
        color={color}
        // onClick={() => handleSquareClick(color, index)}
      >
        {sourceComp}
      </Square>
    );
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <Div height={size * resolution[1]} width={size * resolution[0]}>
        {squares}
      </Div>
    </DndProvider>
  );
}

export default Board;
