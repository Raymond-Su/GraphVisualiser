export interface NodeCoordinate {
  x: number;
  y: number;
  p: NodePointCoordinate | undefined;
  pDeg: number;
  pDist: number;
}

export interface NodePointCoordinate extends coordinate {
  key: number;
}

export interface coordinate {
  x: number;
  y: number;
}
