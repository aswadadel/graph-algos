import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { canvasActions } from "../../store/CanvasSlice";
import Node from "../../utils/node";
import bfs from '../../algorithms/bfs'
import { xyToIndex } from "../../utils/position";

let initial = true;
let debounce = null;

function Graph() {
  const dispatch = useDispatch();
  const canvas = useSelector((state) => state.canvas.canvas);
  const canvasChanged = useSelector((state) => state.canvas.canvasChanged);
  const sourceXy = useSelector((state)=>state.canvas.source)
  const resolution = useSelector((state) => state.canvas.resolution);
  const [nodes] = useState(() => {
    let _nodes = [];
    for (let i = 0; i < canvas.length; i++) {
      _nodes.push(new Node(i, canvas[i]));
    }
    dispatch(canvasActions.resetCanvasChanged());
    return _nodes;
  });

  // ====== updates when walls are added ======
  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    if (canvasChanged === false) {
      return;
    }
    clearTimeout(debounce);

    debounce = setTimeout(() => {
      for (let i = 0; i < canvas.length; i++) {
        nodes[i]._color = canvas[i];
      }
    }, 500);
    dispatch(canvasActions.resetCanvasChanged());
  }, [canvasChanged, canvas, dispatch, nodes]);

  // ==== updates Node's resolution when it changes
  useEffect(() => {
    Node.resolution = resolution;
  }, [resolution]);

  const keyPressHandler = useCallback(
    (e) => {
      if (e.key !== " ") return;
      bfs(nodes, xyToIndex(sourceXy, resolution));
    },
    [nodes, sourceXy, resolution]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPressHandler);
    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  }, [keyPressHandler]);

  return <></>;
}

export default Graph;
