import { useState } from 'react';
import { Cube } from './Cube';
import { rotateX, rotateY, rotateXY } from '../animations';

export const Tesseract = () => {
  const [isHovered, setIsHovered] = useState(false);
  const speed = isHovered ? 2 : 1;

  return (
    <group
      onPointerEnter={(e) => (e.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
    >
      <Cube
        position={[0, 0, 0]}
        size={[1, 1, 1]}
        color={'teal'}
        animation={rotateX}
        speed={speed}
      />

      <Cube
        position={[0, 0, 0]}
        size={[1, 1, 1]}
        color={'teal'}
        animation={rotateY}
        speed={speed}
      />

      <Cube
        position={[0, 0, 0]}
        size={[1.5, 1.5, 1.5]}
        color={'teal'}
        animation={rotateXY}
        speed={speed}
      />
    </group>
  )
}