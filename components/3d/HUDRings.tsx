"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HUDRings() {
  const group1 = useRef<THREE.Mesh>(null);
  const group2 = useRef<THREE.Mesh>(null);
  const group3 = useRef<THREE.Mesh>(null);
  const group4 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group1.current) {
      group1.current.rotation.z = t * 0.3;
      group1.current.rotation.x = Math.sin(t * 0.15) * 0.3;
    }
    if (group2.current) {
      group2.current.rotation.z = -t * 0.2;
      group2.current.rotation.y = Math.cos(t * 0.2) * 0.2;
    }
    if (group3.current) {
      group3.current.rotation.x = t * 0.15;
      group3.current.rotation.z = Math.sin(t * 0.1) * 0.15;
    }
    if (group4.current) {
      group4.current.rotation.y = t * 0.25;
      group4.current.rotation.x = -Math.cos(t * 0.18) * 0.2;
    }
  });

  return (
    <group>
      {/* Ring 1 — inner cyan */}
      <mesh ref={group1}>
        <ringGeometry args={[1.55, 1.57, 128]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.45} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>

      {/* Ring 2 — mid cyan, tilted */}
      <mesh ref={group2} rotation={[0.4, 0, 0]}>
        <ringGeometry args={[1.9, 1.91, 64]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.2} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>

      {/* Ring 3 — outer blue */}
      <mesh ref={group3} rotation={[0.8, 0.3, 0]}>
        <ringGeometry args={[2.3, 2.31, 96]} />
        <meshBasicMaterial color="#0088cc" transparent opacity={0.15} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>

      {/* Ring 4 — outer orange accent */}
      <mesh ref={group4} rotation={[1.2, 0.6, 0]}>
        <ringGeometry args={[2.7, 2.71, 64]} />
        <meshBasicMaterial color="#ff6b35" transparent opacity={0.1} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>

      {/* Marker dots on ring 3 */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 2.31, Math.sin(angle) * 2.31, 0]} rotation={[0.8, 0.3, 0]}>
            <sphereGeometry args={[0.018, 6, 6]} />
            <meshBasicMaterial color="#00d4ff" transparent opacity={0.6} />
          </mesh>
        );
      })}
    </group>
  );
}
