/**
 * Sphere Component
 * 
 * A simple 3D mesh component rendering a sphere.
 * Used within `Canva` or other `Canvas` contexts.
 */
const Sphere = () => {
  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[3, 64, 64]} />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
};

export default Sphere;


