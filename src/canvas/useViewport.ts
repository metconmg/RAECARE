import { useState } from 'react';

export interface ViewportState {
  x: number;
  y: number;
  zoom: number;
}

export function useViewport(initial: ViewportState = { x: 0, y: 0, zoom: 1 }) {
  const [viewport, setViewport] = useState(initial);
  return { viewport, setViewport };
}
