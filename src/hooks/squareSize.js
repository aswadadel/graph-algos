import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function getSquareSize([resX, resY]) {
  const { innerWidth: width, innerHeight: height } = window;
  let sizeX = width / resX;
  let sizeY = height / resY;
  return Math.min(sizeX, sizeY);
}

export default function useSquareSize() {
  const resolution = useSelector((state) => state.canvas.resolution);
  const [squareSize, setsquareSize] = useState(getSquareSize(resolution));

  useEffect(() => {
    // let timeout = null;
    // let handleResize = () => {
    //   clearTimeout(timeout);
    //   timeout = setTimeout(() => {
    //     setsquareSize(getSquareSize(resolution));
    //   }, 50);
    // };
    let handleResize = () => {
      setsquareSize(getSquareSize(resolution));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [resolution]);

  return squareSize;
}
