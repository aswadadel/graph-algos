import React from "react";
import { useSelector } from "react-redux";
import Square from "./Square";
import styled from "styled-components";
import { indexToXy, xyToIndex } from "../utils/position";
import Source from "./Source";
import useSquareSize from "../hooks/squareSize";

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
  const size = useSquareSize();

  let sourceIndex = xyToIndex(source, resolution);

  const squares = canvas.map((color, index) => {
    const sourceComp = index === sourceIndex ? <Source /> : null;
    return (
      <Square key={index} size={size}>
        {sourceComp}
      </Square>
    );
  });

  return (
    <Div height={size * resolution[1]} width={size * resolution[0]}>
      {squares}
    </Div>
  );
}

export default Board;
