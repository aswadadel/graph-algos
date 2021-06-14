import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function getSquareSize([resX, resY]) {
  const { innerWidth: width, innerHeight: height } = window;
  let sizeX = width / resX;
  let sizeY = height / resY;
  console.log(sizeX, sizeY);
  console.log(Math.min(sizeX, sizeY));
  return Math.min(sizeX, sizeY);
}

export default function useSquareSize() {
  const resolution = useSelector((state) => state.canvas.resolution);
  const [squareSize, setsquareSize] = useState(getSquareSize(resolution));

  useEffect(() => {
    let handleResize = () => {};
    const timeout = setTimeout(() => {
      handleResize = () => {
        setsquareSize(getSquareSize(resolution));
      };

      window.addEventListener("resize", handleResize);
    }, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, [resolution]);

  return squareSize;
}
