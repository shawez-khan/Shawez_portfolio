"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Lighting() {
  const key1 = useRef<THREE.PointLight>(null);
  const fill1 = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (key1.current) {
      key1.current.position.x = Math.sin(t * 0.35) * 3.5;
      key1.current.position.z = Math.cos(t * 0.35) * 3.5;
      key1.current.intensity = 3.5 + Math.sin(t * 0.9) * 0.4;
    }
    if (fill1.current) {
      fill1.current.position.x = Math.sin(t * 0.2 + Math.PI) * 2.5;
      fill1.current.position.z = Math.cos(t * 0.2 + Math.PI) * 2.5;
    }
  });

  return (
    <>
      {/* Clean neutral ambient light */}
      <ambientLight intensity={0.8} color="#ffffff" />

      {/* Main Orbiting Warm White Key Light */}
      <pointLight
        ref={key1}
        position={[3, 2.5, 4]}
        intensity={3.8}
        color="#fffaf0"
        distance={15}
        decay={1.5}
      />

      {/* Soft Front Neutral Studio Light */}
      <directionalLight
        position={[0, 1, 4]}
        intensity={1.5}
        color="#ffffff"
      />

      {/* Soft Side Warm Fill Light */}
      <pointLight
        ref={fill1}
        position={[-3, 1.5, -2]}
        intensity={2.0}
        color="#fef3c7"
        distance={12}
        decay={2}
      />

      {/* Top Rim Light — Crisp Warm Light */}
      <pointLight
        position={[0, 4.0, -3.5]}
        intensity={2.2}
        color="#ffffff"
        distance={12}
        decay={2}
      />

      {/* Subtle Ground Bounce */}
      <pointLight
        position={[0, -2.5, 1.5]}
        intensity={0.8}
        color="#fed7aa"
        distance={8}
        decay={2}
      />
    </>
  );
}
