import React from "react";
import { Sigma, RelativeSize, NodeShapes, EdgeShapes } from "react-sigma";

function App() {
  let myGraph = {
    nodes: [
      {id: "A", label: "Node A", x: 0, y: 0, size: 100, color: "#64B5F6"},
      {id: "B", label: "Node B", x: 0, y: 5, size: 100, color: "#64B5F6"} 
    ],
    edges: [
      {id: "E1", source: "A", target: "B"}
    ]
  };
  return (
    <Sigma
      graph={myGraph}
    >
      <RelativeSize initializeSize={3}/>
      <EdgeShapes/>
      <NodeShapes/>
    </Sigma>
  );
}

export default App;
