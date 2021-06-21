import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Square from "./Square";
import Source from "./Source";
import Target from "./Target";

import useSquareSize from "../hooks/squareSize";
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
  const target = useSelector((state) => state.canvas.target);

  const size = useSquareSize();

  const sourceIndex = xyToIndex(source, resolution);
  const targetIndex = xyToIndex(target, resolution);

  // ========= draw squares =========
  const squares = canvas.map((color, index) => {
    let comp = null;
    if (index === sourceIndex) comp = <Source />;
    else if (index === targetIndex) comp = <Target />;
    return (
      <Square key={index} size={size} index={index}>
        {comp}
      </Square>
    );
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <Div
        height={size * resolution[1]}
        width={size * resolution[0]}
        onContextMenu={(e) => e.preventDefault()}
      >
        {squares}
      </Div>
    </DndProvider>
  );
}

export default Board;
