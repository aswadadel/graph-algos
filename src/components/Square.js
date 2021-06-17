import React from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { canvasActions } from "../store/CanvasSlice";
import { getColor } from "../utils/position";
import { Data } from "../utils/constants";

const Div = styled.div`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 1px solid grey;
  background-color: ${(props) => props.backgroundColor};
  display: inline-block;
  box-sizing: border-box;
  user-select: none;
  transition: background-color .2s ;
`;
const Highlight = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: 0.5;
  background-color: yellow;
`;

function Square({ children, size, index }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.canvas.canvas[index]);

  const dropFunc = (item) => {
    if (data === Data.Obj) return;

    if (item.name === "source") dispatch(canvasActions.moveSource(index));
    else dispatch(canvasActions.moveTarget(index));
  };

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "object",
      drop: dropFunc,
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [index, data]
  );

  const mouseEnterHandler = (event) => {
    event.stopPropagation()
    if(event.buttons === 1) dispatch(canvasActions.addWalls(index))
    else if(event.buttons === 2) dispatch(canvasActions.remWalls(index))
  }

  return (
    <Div
      ref={drop}
      size={size}
      backgroundColor={getColor(data)}
      onMouseEnter={mouseEnterHandler}
    >
      {children}
      {isOver && data !== Data.Obj && <Highlight />}
    </Div>
  );
}

export default Square;
