import React from "react";
import data from "./data.json";

import {Sigma, RelativeSize, RandomizeNodePositions} from "react-sigma";

function App() {
  return (
      <Sigma graph={data} settings={{ drawEdges: true, clone: false }}>
        <RelativeSize initialSize={5} />
        <RandomizeNodePositions />
      </Sigma>
  );
}

export default App;
