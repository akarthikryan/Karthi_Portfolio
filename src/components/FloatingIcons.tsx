
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const FloatingIcon = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
};

const FloatingIcons = () => {
  return (
    <>
      <FloatingIcon position={[-8, 2, -5]} color="#8B5CF6" scale={0.8} />
      <FloatingIcon position={[8, -1, -5]} color="#06B6D4" scale={1.2} />
      <FloatingIcon position={[-6, -3, -8]} color="#10B981" scale={0.6} />
      <FloatingIcon position={[6, 3, -8]} color="#F59E0B" scale={1} />
      <FloatingIcon position={[0, -4, -10]} color="#EF4444" scale={0.9} />
    </>
  );
};

export default FloatingIcons;
