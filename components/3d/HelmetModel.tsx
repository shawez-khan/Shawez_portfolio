"use client";

import { useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ═════════════════════════════════════════════════════════════════════════════
// 🎨 EASY HELMET COLOR & MATERIAL CUSTOMIZER
// Edit these settings anytime to change the look of your 3D Iron Man v2 helmet!
// ═════════════════════════════════════════════════════════════════════════════
export const HELMET_CUSTOMIZER = {
  // Eye Visor Glow Color (Hex code e.g. "#00ffff" Cyan, "#ff0000" Red, "#00ff41" Neon Green, "#ffffff" White)
  eyeColor: "#00ffff",

  // Custom Color Tint over armor (null = keep natural GLB textures, or set e.g. "#000000" for Stealth Black)
  armorTint: null as string | null,

  // Metallic Reflections Sheen (0.0 = Non-metallic, 1.0 = Pure Glossy Metal)
  metalness: 0.70,

  // Surface Roughness (0.05 = Ultra Mirror Polish, 0.8 = Matte Industrial)
  roughness: 0.25,
};

export default function HelmetModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/v2helmet.glb");

  // Auto-center and auto-scale the model
  const { normalizedScene, scale } = useMemo(() => {
    const cloned = scene.clone(true);

    // Compute bounding box
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Center model at origin
    cloned.position.sub(center);

    // Scale so longest axis fits in ~2.5 units
    const maxDim = Math.max(size.x, size.y, size.z);
    const targetSize = 2.5;
    const computedScale = maxDim > 0 ? targetSize / maxDim : 1;

    // Apply material settings
    cloned.traverse((node) => {
      if ((node as THREE.Mesh).isMesh) {
        const mesh = node as THREE.Mesh;
        mesh.castShadow = false;
        mesh.receiveShadow = false;

        const parentName = (node.parent?.name || "").toLowerCase();
        const meshName = (mesh.name || "").toLowerCase();
        const isEyeNode = parentName.includes("olhos") || meshName.includes("olhos");

        const mats = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];

        mats.forEach((mat) => {
          if (mat instanceof THREE.MeshStandardMaterial) {
            const matName = (mat.name || "").toLowerCase();
            const isEyeMat = isEyeNode || matName.includes("olhos");

            if (isEyeMat) {
              // Glowing Eye Visor only
              mat.color = new THREE.Color(HELMET_CUSTOMIZER.eyeColor);
              mat.emissive = new THREE.Color(HELMET_CUSTOMIZER.eyeColor);
              mat.emissiveIntensity = 4.0;
              mat.roughness = 0.1;
              mat.metalness = 0.2;
            } else {
              if (HELMET_CUSTOMIZER.armorTint) {
                mat.color = new THREE.Color(HELMET_CUSTOMIZER.armorTint);
              }
              mat.metalness = HELMET_CUSTOMIZER.metalness;
              mat.roughness = HELMET_CUSTOMIZER.roughness;
              mat.envMapIntensity = 1.0;
            }
            mat.needsUpdate = true;
          }
        });
      }
    });

    return { normalizedScene: cloned, scale: computedScale };
  }, [scene]);

  // Smooth mouse head-tracking + floating animation
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Pointer coordinates normalized between -1 and 1
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;

    // Target rotations: turn head towards pointer
    const targetRotY = pointerX * 1.1;  // Rotate left/right (yaw)
    const targetRotX = -pointerY * 0.7; // Rotate up/down (pitch)

    // Floating offset
    const floatY = Math.sin(t * 0.8) * 0.08;

    // Interpolate rotation smoothly towards target
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      0.08
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.08
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      floatY,
      0.08
    );
  });

  return (
    <group ref={groupRef} scale={scale}>
      <primitive object={normalizedScene} />
    </group>
  );
}

useGLTF.preload("/models/v2helmet.glb");
