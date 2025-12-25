import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere";
import { OrbitControls } from "@react-three/drei";

/**
 * Canva Component
 * 
 * A wrapper for a 3D Canvas scene using `react-three-fiber`.
 * 
 * Features:
 * - Sets up the 3D environment with lights and controls (`OrbitControls`).
 * - Renders a simple 3D Sphere by default.
 * - Used for background or decorative 3D elements.
 */
const Canva = () => {
  return (
    <Canvas>
      <OrbitControls
        enableZoom={false}
        autoRotate={true}
        enableDamping={true}
      />
      <ambientLight intensity={0} />
      <pointLight
        color={0xffffff}
        intensity={100}
        distance={100}
        position={[0, 3, 5]}
      />
      {/* <directionalLight position={[0, 10, 10]} intensity={1} /> */}
      <Sphere />
    </Canvas>
  );
};

export default Canva;


