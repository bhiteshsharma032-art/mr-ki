'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/hooks/useTheme';

export function HeroOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  
  // Dynamic theme colors
  const colorPrimary = theme === 'dark' ? '#FF6B4A' : '#E8553D'; 
  const colorSecondary = theme === 'dark' ? '#4ADE80' : '#2D5A3D';
  const emissiveColor = theme === 'dark' ? '#FF6B4A' : '#E8553D';
  
  // Continuous rotation and subtle mouse reaction
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Base rotation
      meshRef.current.rotation.y = time * 0.15;
      meshRef.current.rotation.x = time * 0.1;
      
      // Smooth mouse interaction (subtle)
      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (state.pointer.y * Math.PI) / 8;
      
      meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);
      meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x);
    }
  });

  // Particle System positions computed once
  const particlesCount = 75;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const radius = 2.2 + Math.random() * 1.5; // Orbit radius
        
        pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta); // x
        pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
        pos[i * 3 + 2] = radius * Math.cos(phi); // z
    }
    return pos;
  }, [particlesCount]);

  return (
    <>
      <ambientLight intensity={theme === 'dark' ? 0.4 : 0.8} />
      <directionalLight position={[5, 10, 5]} intensity={2} color={colorPrimary} />
      <pointLight position={[-5, -5, -5]} intensity={1.5} color={colorSecondary} />
      <pointLight position={[0, 0, 5]} intensity={0.5} color={colorPrimary} />
      
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh ref={meshRef} scale={1.2}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          {/* We use any for the material because MeshDistortMaterial prop typings can be overly strict with Three 16x */}
          <MeshDistortMaterial
            color={colorPrimary}
            emissive={emissiveColor}
            emissiveIntensity={0.2}
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.15}
            metalness={0.7}
            roughness={0.1}
            distort={0.35}
            speed={2}
          />
        </mesh>
      </Float>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color={colorSecondary}
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}
