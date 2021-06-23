export const Data = {
  White: 0,
  Black: 1,
  Source: 2,
  Target: 3,
  Yellow: 4,
  Orange: 5,
  Green: 6,
};
export function isObj(d) {
  return d === Data.Source || d === Data.Target;
}

export function getColor(data) {
  switch (data) {
    case 0:
      return "white";
    case 1:
      return "black";
    case 4:
      return "yellow";
    case 5:
      return "orange";
    case 6:
      return "green";
    default:
      return "white";
  }
}
