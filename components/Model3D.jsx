"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/model/Untitled.glb");
  return <primitive object={scene} scale={4} position={[0, -1.5, 0]} />;
}

export default function Model3D() {
  return (
    <div className="w-full h-[450px] rounded-3xl overflow-hidden">
      <Canvas camera={{ position: [0, 1, 3] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
