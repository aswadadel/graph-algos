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
  const data = useSelector(state => state.canvas.canvas[index])
  const dropFunc = (item) => {
    if(data===Data.Obj) {
      console.log(data)
      return
    }
    if (item.name === "source") dispatch(canvasActions.moveSource(index));
    else dispatch(canvasActions.moveTarget(index));
  };
  // const canDropHandler = () => {
  //   return data!==Data.Null
  // };
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "object",
      // canDrop: canDropHandler,
      drop: dropFunc,
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        // canDrop: !!monitor.canDrop(),
      }),
    }),
    [index, data]
  );
  return (
    <Div ref={drop} size={size} backgroundColor={getColor(data)}>
      {children}
      {isOver && data === Data.White && <Highlight />}
    </Div>
  );
}

export default Square;
