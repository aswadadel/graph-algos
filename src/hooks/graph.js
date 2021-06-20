// import { useCallback } from "react";
// import { useSelector } from "react-redux";
// import { Data } from "../utils/constants";
// import { xyToIndex } from "../utils/position";

// function getEdges(canvas, resolution, coordinate) {
//   const directions = [
//     [0, 1],
//     [1, 0],
//     [0, -1],
//     [-1, 0],
//   ];

//   const result = [];

//   for (const direction in directions) {
//     let directedCoord = coordinate.map(
//       (coord, index) => Number(coord) + Number(direction[index])
//     );
// 		console.log(directedCoord)
//     if (
//       canvas[xyToIndex(directedCoord, resolution)] === Data.White &&
//       directedCoord.reduce(
//         (total, current, index) =>
//           total && current >= 0 && current < resolution[index],
//         true
//       )
//     ) {
// 			result.push(directedCoord)
//     }
//   }
// }

// export default function useGraph() {
//   const resolution = useSelector((state) => state.canvas.resolution);
//   const canvas = useSelector((state) => state.canvas.canvas);
//   return {
// 		getEdges: useCallback(
// 			() => {
// 				getEdges.bind(null, canvas, resolution)
// 			},
// 			[canvas, resolution],
// 		) 
// 	};
// }
