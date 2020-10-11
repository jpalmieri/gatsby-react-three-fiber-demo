import React from "react";
import { Canvas } from "react-three-fiber";
import { DoubleSide } from "three";
import Controls from "../Controls";
import "./style.css";

const PhotoPlane = () => {
  return (
    <mesh>
      <planeGeometry attach="geometry" args={[0.5, 0.5, 16, 16]} />
      <shaderMaterial
        attach="material"
        uniforms={{ uTime: { value: 0 } }}
        wireframe
        side={DoubleSide}
      />
    </mesh>
  );
};

export default () => {
  const isBrowser = typeof window !== "undefined";

  return (
    <>
      {isBrowser && (
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
          <fog attach="fog" args={["black", 10, 25]} />
          <Controls />
          <PhotoPlane />
        </Canvas>
      )}
    </>
  );
};
