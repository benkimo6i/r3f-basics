import { useRef } from 'react';

export const Cube = ({ position, size, color, animation, speed }) => {
  const ref = useRef();
  animation(ref, speed)

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  )
};