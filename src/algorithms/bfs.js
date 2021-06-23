import { Data } from "../utils/constants";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function bfs(nodes, sourceIndex) {
  let source = nodes[sourceIndex];
  source.color = Data.Yellow;
  source.distance = 0;
  source.predecessor = null;

  let tr = null;
  let targetFound = false;
  let q = [];
  q.push(source);
  console.log(nodes[1]);
  while (q.length !== 0 && !targetFound) {
    let u = q.shift();
    let adj = u.adj;
    for (let i = 0; i < adj.length; i++) {
      let v = nodes[adj[i]];
      if (v.color === Data.Target) {
        console.log("found it");
        targetFound = true;
        v.distance = u.distance + 1;
        v.predecessor = u;
        tr = v;
        break;
      }
      if (v.color === Data.White) {
        v.color = Data.Yellow;
        v.distance = u.distance + 1;
        v.predecessor = u;
        q.push(v);
      }
      await sleep(1);
    }
    u.color = Data.Orange;
  }

  while (q.length !== 0) {
    let u = q.shift();
    u.color = Data.White;
  }

  if (tr === null) {
    return;
  }
  while (tr.predecessor !== null) {
    tr.color = Data.Green;
    tr = tr.predecessor;
  }
  tr.color = Data.Green;
}
