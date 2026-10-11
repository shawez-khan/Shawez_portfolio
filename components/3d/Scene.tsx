"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import Lighting from "./Lighting";
import Particles from "./Particles";
import HUDRings from "./HUDRings";
import HelmetModel from "./HelmetModel";

// Fallback wireframe object while loading
function FallbackSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.4;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 4]} />
      <meshStandardMaterial
        color="#eab308"
        emissive="#dc2626"
        emissiveIntensity={0.8}
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

// Camera parallax tracking
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef(new THREE.Vector3(0, 0.1, 5.5));

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    target.current.x = mouse.current.x * 0.4;
    target.current.y = mouse.current.y * 0.25 + 0.1;
    target.current.z = 5.5;
    camera.position.lerp(target.current, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Live FPS tracker — measures actual render performance
function FPSTracker({ onFPS }: { onFPS: (fps: number) => void }) {
  const frames = useRef(0);
  const last = useRef(performance.now());

  useFrame(() => {
    frames.current++;
    const now = performance.now();
    if (now - last.current >= 1000) {
      onFPS(Math.round((frames.current * 1000) / (now - last.current)));
      frames.current = 0;
      last.current = now;
    }
  });

  return null;
}

interface SceneProps {
  isMobile?: boolean;
  onFPS?: (fps: number) => void;
}

export default function Scene({ isMobile = false, onFPS }: SceneProps) {
  const particleCount = isMobile ? 30 : 60;

  return (
    <Canvas
      camera={{ position: [0, 0.1, 5.5], fov: 42, near: 0.01, far: 200 }}
      gl={{
        antialias: true,
        alpha: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
      dpr={isMobile ? 1 : [1, 2]}
      onCreated={({ gl }) => {
        gl.setClearColor(0x050810, 0);
      }}
    >
      <CameraRig />

      {/* Real FPS measurement */}
      {onFPS && <FPSTracker onFPS={onFPS} />}

      {/* Clean neutral studio environment for reflections (no blue night tint) */}
      <Environment preset="city" />

      {/* Clean Studio Lighting Rig */}
      <Lighting />

      {/* Floating Particles */}
      <Particles count={particleCount} radius={3.5} />

      {/* 3D Helmet with Suspense fallback */}
      <Suspense fallback={<FallbackSphere />}>
        <HelmetModel />
        {!isMobile && <HUDRings />}
      </Suspense>
    </Canvas>
  );
}
