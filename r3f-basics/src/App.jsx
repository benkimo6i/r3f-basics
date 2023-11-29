// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Canvas } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Cube } from './components/Cube';
import { Sphere } from './components/Sphere';
import { rotateX, rotateY, rotateXY, translateZ } from './animations';
import './App.css'


const Tesseract = () => {
  const[isHovered, setIsHovered] = useState(false);
  const speed = isHovered ? 2 : 1;
  const ref = useRef();

  translateZ(ref, speed);

  return (
    <group 
      ref={ref}
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

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <ambientLight intensity={0.1} />

      <Tesseract />

      {/* <Sphere 
        position={[0, 0, 0]}
        size={[1, 30, 30]}
        color={'orange'}
        animation={rotateY}
      /> */}
      

    </Canvas>
  )
}

export default App
