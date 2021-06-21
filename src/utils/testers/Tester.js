// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { canvasActions } from "../../store/CanvasSlice";
// import { Data } from "../constants";
// import Node from "../node";

// let initial = true;
// function Index() {
// 	const dispatch = useDispatch()
//   const canvas = useSelector((state) => state.canvas.canvas);
// 	const canvasChanged = useSelector(state=> state.canvas.canvasChanged)
//   const resolution = useSelector((state) => state.canvas.resolution);
//   const [nodes, setNodes] = useState(() => {
//     let _nodes = [];
//     for (let i = 0; i < canvas.length; i++) {
//       _nodes.push(new Node(i, canvas[i]));
//     }
//     return _nodes;
//   });

//   useEffect(() => {
//     if (initial) {
//       initial = false;
//       return;
//     }
//     setNodes(() => {
//       let _nodes = [];
//       for (let i = 0; i < canvas.length; i++) {
//         _nodes.push(new Node(i, canvas[i]));
//       }
//       return _nodes;
//     });
// 		dispatch(canvasActions.resetCanvasChanged)
//   }, [canvasChanged]);

//   useEffect(() => {
//     Node.resolution = resolution;
//   }, [resolution]);

//   // useEffect(() => {
//   //   let n = nodes[1];
//   //   n.color = Data.Orange;
//   //   let adj = n.adj;
//   //   for (let i = 0; i < adj.length; i++) {
//   //     if (nodes[adj[i]].color === Data.Obj) continue;
//   //     nodes[adj[i]].color = Data.Black;
//   //   }
//   // }, []);
// 	console.log('hi')

//   return <></>;
// }

// export default Index;
