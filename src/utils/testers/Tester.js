import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Data } from "../constants";
import Node from "../node";

let initial = true;
function Index() {
  const canvas = useSelector((state) => state.canvas.canvas);
  const resolution = useSelector((state) => state.canvas.resolution);
  const [nodes, setNodes] = useState(() => {
    let _nodes = [];
    for (let i = 0; i < canvas.length; i++) {
      _nodes.push(new Node(i, canvas[i]));
    }
    return _nodes;
  });

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
  }, [canvas]);

  useEffect(() => {
    Node.resolution = resolution;
  }, [resolution]);

  // useEffect(() => {
  //   let n = nodes[1];
  //   n.color = Data.Orange;
  //   let adj = n.adj;
  //   for (let i = 0; i < adj.length; i++) {
  //     if (nodes[adj[i]].color === Data.Obj) continue;
  //     nodes[adj[i]].color = Data.Black;
  //   }
  // }, []);
	console.log('hi')

  return <></>;
}

export default Index;
