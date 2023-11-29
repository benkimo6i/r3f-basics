import { useFrame } from '@react-three/fiber';

export const rotateX = (ref, speed) => {
    useFrame((state, delta) => {
        ref.current.rotation.x += delta * speed;
    })
}

export const rotateY = (ref, speed) => {
    useFrame((state, delta) => {
        ref.current.rotation.y += delta * speed;
    })
}

export const rotateXY = (ref, speed) => {
    useFrame((state, delta) => {
        ref.current.rotation.x += delta * speed;
        ref.current.rotation.y += delta * speed;
    })
}

export const translateZ = (ref, speed) => {
    useFrame((state, delta) => {
        ref.current.position.z = Math.sin(state.clock.elapsedTime) * speed;
    })
}