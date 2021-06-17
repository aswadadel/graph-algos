import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";

const Div = styled.div`
  font-size: 15px;
  color: black;
  opacity: ${props => props.isDragging? 0.5: 1};
  width: 100%;
  height: 100%;
`;

function Source() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "object",
		item: { name: 'source' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return <Div ref={drag} isDragging={isDragging}>🕵️</Div>;
}

export default Source;