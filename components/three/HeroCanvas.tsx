'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { HeroOrb } from '@/components/three/HeroOrb';

export function HeroCanvas() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 2]} /* Optimize for high DPI screens */
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <HeroOrb />
      </Suspense>
    </Canvas>
  );
}
