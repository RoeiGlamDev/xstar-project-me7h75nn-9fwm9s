import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';

const FloatingElement = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const FloatingElements: React.FC = () => {
  const controlsAnimation = useAnimation();

  useEffect(() => {
    controlsAnimation.start({
      y: [0, 1, 0],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    });
  }, [controlsAnimation]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingElement />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

const FloatingElementsContainer: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold text-red-600 mb-4">Welcome to AI</h1>
      <p className="text-lg text-gray-800 mb-8">
        At AI, we specialize in creating cutting-edge solutions for video generation using artificial intelligence. Our platform, VidNexus, harnesses the power of AI to transform your video creation process, making it faster and more efficient.
      </p>
      <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition-all">
        Get Started with VidNexus
      </button>
    </motion.div>
  );
};

const FloatingElementsApp: React.FC = () => {
  return (
    <div className="bg-white">
      <FloatingElements />
      <FloatingElementsContainer />
    </div>
  );
};

export default FloatingElementsApp;