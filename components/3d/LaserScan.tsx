"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function LaserScan() {
  const planeRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.9;
    // Oscillate up and down over the helmet
    const yPos = Math.sin(t) * 1.3;

    if (planeRef.current) {
      planeRef.current.position.y = yPos;
    }
    if (ringRef.current) {
      ringRef.current.position.y = yPos;
      ringRef.current.rotation.z = t * 1.5;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Horizontal glowing cyan laser scan plane */}
      <mesh ref={planeRef} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3.4, 3.4]} />
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Outer diagnostic laser scan ring */}
      <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.35, 1.42, 64]} />
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
