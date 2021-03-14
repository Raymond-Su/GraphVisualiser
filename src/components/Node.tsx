import React from "react";
import { NodeCoordinate } from "../types/Node";

import Line from "./Line";

interface Props {
  nodeCoordinates: NodeCoordinate;
  keyValue: number;
}
const Node = ({ nodeCoordinates, keyValue }: Props): JSX.Element => {
  if (nodeCoordinates.x) {
    return (
      <>
        {nodeCoordinates.p && (
          <Line
            rotation={nodeCoordinates.pDeg}
            distance={nodeCoordinates.pDist}
            coordinates={{ x: nodeCoordinates.p.x, y: nodeCoordinates.p.y }}
            x={nodeCoordinates.x}
            y={nodeCoordinates.y}
          />
        )}
        <div
          style={{
            position: "absolute",
            left: nodeCoordinates.x - 18,
            top: nodeCoordinates.y - 18,
            height: 48,
            width: 48,
            borderRadius: "50%",
            backgroundColor: "blue",
            boxShadow: "0px 0px 5px grey",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1
          }}
          key={keyValue}
        >
          {keyValue}
          <p
            style={{
              fontSize: "0.5em",
              paddingLeft: "2px",
              color: "rgb(180,180,180)"
            }}
          >
            {nodeCoordinates.p && nodeCoordinates.p.key}
          </p>
        </div>
      </>
    );
  }
  return <div />;
};

export default Node;
