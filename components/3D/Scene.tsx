import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
  description: string;
}

const Scene: React.FC<SceneProps> = ({ title, description }) => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <motion.div
        className="absolute top-10 left-10 text-red-600 text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 left-10 text-orange-500 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {description}
      </motion.div>

      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {/ Add 3D models or elements here /}
      </Canvas>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Scene 
      title="Welcome to AI - Your Gateway to Video Innovation"
      description="Creating stunning AI-generated videos with VidNexus"
    />
  );
};

export default App;