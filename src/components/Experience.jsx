import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
import { useRef } from "react";
export const Experience = ({ orbitControlsRef }) => {
  return (
    <>
      <Float
        rotation-x={-Math.PI / 15}
        floatIntensity={0}
        speed={0}
        rotationIntensity={0}
      >
        <Book />
      </Float>
      <OrbitControls
        ref={orbitControlsRef}
        target={[0, -0.255, 0]} // Ajusta el objetivo (centro de la escena)
        minDistance={1} // Distancia mínima (zoom más cercano)
        maxDistance={5} // Distancia máxima (zoom más alejado)
        enableDamping={true} // Habilita la amortiguación (suaviza los movimientos)
        dampingFactor={0.1} // Factor de amortiguación
      />
      <Environment preset="city" environmentIntensity={0.15}></Environment>
      <directionalLight
        position={[2, 5, 2]}
        intensity={2.75}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.0} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.3} />
      </mesh>
    </>
  );
};
