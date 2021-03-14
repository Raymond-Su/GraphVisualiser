import React from "react";
import { coordinate } from "../types/Node";

interface Props {
  rotation: number;
  distance: number;
  coordinates: coordinate;
  x: number;
  y: number;
}
const Line = ({
  rotation,
  distance,
  coordinates,
  x,
  y
}: Props): JSX.Element => {
  if (rotation <= 0 && coordinates.x >= x && coordinates.y <= y) {
    rotation += 180;
  } else if (coordinates.x > x && coordinates.y > y) {
    rotation -= 180;
  }
  return (
    <div
      style={{
        height: 3,
        width: distance,
        backgroundColor: "black",
        transform: `rotate(${rotation}deg)`,
        position: "absolute",
        top: coordinates.y,
        left: coordinates.x,
        transformOrigin: rotation < 180 ? "top left" : "top right"
      }}
    />
  );
};

export default Line;
