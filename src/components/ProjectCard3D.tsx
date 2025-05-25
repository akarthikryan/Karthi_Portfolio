
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface ProjectCard3DProps {
  color: string;
}

const ProjectCard3D = ({ color }: ProjectCard3DProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[4, 3]} />
        <meshStandardMaterial color={color} transparent opacity={0.1} />
      </mesh>
      
      <mesh position={[-1, 0.5, 0.1]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </mesh>
      
      <mesh position={[1, -0.5, 0.1]}>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </mesh>
      
      <mesh position={[0, 0, 0.2]}>
        <torusGeometry args={[0.3, 0.1, 8, 16]} />
        <meshStandardMaterial color={color} transparent opacity={0.4} />
      </mesh>
    </group>
  );
};

export default ProjectCard3D;
