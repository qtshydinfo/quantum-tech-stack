"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";

function Sphere() {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta;
      meshRef.current.rotation.x += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color="#00f0ff" wireframe />
    </mesh>
  );
}

function Particles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(3000);
    for (let i = 0; i < 3000; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00f0ff" />
    </points>
  );
}

export default function ThreeScene() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Particles />
      <Sphere />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
