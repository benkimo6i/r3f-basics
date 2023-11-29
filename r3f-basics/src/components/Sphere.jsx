import { useRef, useState } from 'react';

export const Sphere = ({ position, size, color, animation }) => {
  const [isHovered, setIsHovered] = useState(false);
  const speed = isHovered ? 2 : 1;
  const ref = useRef();

  animation(ref, speed);

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(e) => (e.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  )
};