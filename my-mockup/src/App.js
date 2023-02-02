import React from "react";
import data from "./data.json";

import {Sigma, RelativeSize, NodeShapes, EdgeShapes, RandomizeNodePositions} from "react-sigma";

function App() {
  let myGraph = {
    nodes: [
      {id: "A", label: "Node A", x: 0, y: 0, size: 3, color: "#64B5F6"},
      {id: "B", label: "Node B", x: 0, y: 5, size: 3, color: "#64B5F6"}
    ],
    edges: [
      {id: "E1", source: "A", target: "B"}
    ]
  };
  return (
      <Sigma graph={data} settings={{ drawEdges: true, clone: false }}>
        <RelativeSize initialSize={5} />
        <RandomizeNodePositions />
      </Sigma>
  );
}

export default App;
