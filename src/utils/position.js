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
export function canMove(color){
  return color==='white'
}
