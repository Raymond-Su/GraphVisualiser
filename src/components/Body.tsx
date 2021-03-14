import React, { HTMLAttributes } from "react";
import { NodeCoordinate } from "../types/Node";
import Node from "./Node";

interface Props extends HTMLAttributes<HTMLDivElement> {
  nodeCoordinates: NodeCoordinate[];
}

const Body = ({ nodeCoordinates, ...props }: Props): JSX.Element => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%"
      }}
      {...props}
    >
      {nodeCoordinates &&
        nodeCoordinates.map((node, keyValue) => (
          <Node nodeCoordinates={node} key={keyValue} keyValue={keyValue} />
        ))}
    </div>
  );
};

export default Body;
