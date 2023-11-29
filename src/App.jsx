// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls, useHelper } from '@react-three/drei';
import { DirectionalLightHelper } from 'three';
import { Tesseract } from './components/Tesseract';
import { Sphere } from './components/Sphere';
import { rotateY } from './animations';
import './App.css'

const Scene = () => {
  const directionalLightRef = useRef();

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, 'white');

  return (
    <>
      <directionalLight 
        position={[-1, 1, 2]} 
        intensity={0.8}
        ref={directionalLightRef}
      />
      <ambientLight intensity={0.1} />

      {/* <Tesseract /> */}

      <Sphere 
        position={[0, 0, 0]}
        size={[1, 30, 30]}
        color={'orange'}
        animation={rotateY}
      />
      
      <OrbitControls />

    </>
  )
}

const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  )
}

export default App
