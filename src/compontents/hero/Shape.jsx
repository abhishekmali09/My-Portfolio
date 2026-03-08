import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <Sphere args={[1, 1000, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#C4983D"
          attach="material"
          distort={0.4}
          speed={1.5}
        />
      </Sphere>
      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} />
    </>
  );
};

export default Shape;