import React, { useState } from "react";
import Body from "./components/Body";
import Heading from "./components/Heading";
import { NodeCoordinate } from "./types/Node";

import "../src/styles/Global.css";

const MIN_NODE_CLICK_DISTANCE = 50;

const App = (): JSX.Element => {
  const [nodeCoordinates, setNodeCoordinates] = useState<NodeCoordinate[]>([]);

  return (
    <div className="App">
      <Heading handleReset={() => setNodeCoordinates([])} />
      <Body nodeCoordinates={nodeCoordinates} />
      <div
        style={{
          height: "50vh",
          position: "relative",
          width: "100%"
        }}
        onClick={(e) => {
          if (nodeCoordinates && nodeCoordinates.length > 0) {
            let minDistance = Infinity;
            let minKey = 0;
            nodeCoordinates.map((coordinates, index) => {
              const distance = Math.sqrt(
                (coordinates.x - e.clientX) * (coordinates.x - e.clientX) +
                  (coordinates.y - e.clientY) * (coordinates.y - e.clientY)
              );
              if (distance < minDistance) {
                minDistance = distance;
                minKey = index;
              }
            });
            console.log(minDistance);
            const pX = nodeCoordinates[minKey].x;
            const pY = nodeCoordinates[minKey].y;
            const pDeg =
              Math.atan((pY - e.clientY) / (pX - e.clientX)) * (180 / Math.PI);
            if (minDistance > MIN_NODE_CLICK_DISTANCE) {
              setNodeCoordinates(
                nodeCoordinates.concat({
                  x: e.clientX,
                  y: e.clientY,
                  p: { key: minKey, x: pX, y: pY },
                  pDeg: pDeg,
                  pDist: minDistance
                })
              );
            }
          } else {
            setNodeCoordinates([
              { x: e.clientX, y: e.clientY, p: undefined, pDeg: 0, pDist: 0 }
            ]);
          }
        }}
      />
    </div>
  );
};

export default App;
