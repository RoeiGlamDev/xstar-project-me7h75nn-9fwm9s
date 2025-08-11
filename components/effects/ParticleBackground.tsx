import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ParticleSystem } from 'three/examples/jsm/particles/ParticleSystem';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const canvas: HTMLCanvasElement | null = document.querySelector('#particle-canvas');
    if (canvas) {
      const particleSystem = new ParticleSystem();
      // Configure particle system settings here
      particleSystem.setColors(new THREE.Color('red'), new THREE.Color('orange'), new THREE.Color('white'));
      particleSystem.initialize(canvas);
    }
  }, []);

  return (
    <div className="relative">
      <Canvas id="particle-canvas" className="absolute inset-0">
        {/ Particle system will be rendered here /}
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <motion.div className="text-5xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Welcome to AI
        </motion.h1>
        <motion.div className="text-lg text-center px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          Transforming your ideas into stunning AI-generated videos with VidNexus.
        </motion.p>
        <motion.div className="mt-6 bg-red-600 hover:bg-orange-500 text-white py-2 px-4 rounded transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default ParticleBackground;