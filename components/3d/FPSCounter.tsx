"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

// Exported hook: measures actual rendered FPS and writes it to a shared ref
export function useFPS(): React.RefObject<number> {
  const fpsRef = useRef<number>(60);
  const frames = useRef(0);
  const last = useRef(performance.now());

  useFrame(() => {
    frames.current++;
    const now = performance.now();
    const delta = now - last.current;
    if (delta >= 1000) {
      fpsRef.current = Math.round((frames.current * 1000) / delta);
      frames.current = 0;
      last.current = now;
    }
  });

  return fpsRef;
}
