import React from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { canvasActions } from "../store/CanvasSlice";

const Div = styled.div`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 1px solid grey;
  background-color: white;
  display: inline-block;
  box-sizing: border-box;
  user-select: none;
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

function Square({ children, size, pos, color }) {
  const dispatch = useDispatch();
  const dropFunc = () => {
    color==='white' && dispatch(canvasActions.moveSource(pos));
  };
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "source",
      drop: dropFunc,
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [pos]
  );
  return (
    <Div ref={drop} size={size}>
      {children}
      {isOver && color === "white" && <Highlight />}
    </Div>
  );
}

export default Square;
