export function xyToIndex([x, y], [resX, resY]) {
  let index = 0;
  index += x + y * resX;
  return index;
}
export function indexToXy(index, [resX, resY]) {
  let [x, y] = [0, 0];
  x = index % resX;
  y = Math.floor(index / resX);
  return [x, y];
}
export function getCanvasSize([resX, resY]) {
  return resX * resY;
}

export function compareXY(pos1, pos2) {
  return pos1[0] === pos2[0] && pos1[1] === pos2[1];
}

export function getColor(data) {
  switch (data) {
    case 0:
      return "white";
    case 1:
      return "black";
    case 2:
      return "orange";
    default:
      return null;
  }
}
