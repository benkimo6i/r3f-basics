import { useRef } from 'react';

export const Sphere = ({position, size, color, animation, speed}) => {
    const ref = useRef();
    animation(ref, speed)

    return (
        <mesh position={position} ref={ref}>
            <sphereGeometry args={size} />
            <meshStandardMaterial color={color} wireframe/>
        </mesh>
    )
};