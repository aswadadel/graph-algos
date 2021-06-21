import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { canvasActions } from "../../store/CanvasSlice";
// import { Data } from "../../utils/constants";
import Node from "../../utils/node";

// function bfs(nodes, sourceIndex){
// 	let source = nodes[sourceIndex]

// }

let initial = true;
function Graph() {
	const dispatch = useDispatch()
  const canvas = useSelector((state) => state.canvas.canvas);
	const canvasChanged = useSelector(state=> state.canvas.canvasChanged)
  const resolution = useSelector((state) => state.canvas.resolution);
  const [nodes, setNodes] = useState(() => {
    let _nodes = [];
    for (let i = 0; i < canvas.length; i++) {
      _nodes.push(new Node(i, canvas[i]));
    }
    return _nodes;
  });

	// ====== updates when walls are added ====== 
  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    setNodes(() => {
      let _nodes = [];
      for (let i = 0; i < canvas.length; i++) {
        _nodes.push(new Node(i, canvas[i]));
      }
      return _nodes;
    });
		dispatch(canvasActions.resetCanvasChanged)
  }, [canvasChanged]);

	// ==== updates Node's resolution when it changes
  useEffect(() => {
    Node.resolution = resolution;
  }, [resolution]);

  return <></>;
}

export default Graph;