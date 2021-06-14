import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 1px solid grey;
  background-color: white;
  display: inline-block;
  box-sizing: border-box;
`;

function Square({ children, size }) {
  return <Div size={size}>{children}</Div>;
}

export default Square;
