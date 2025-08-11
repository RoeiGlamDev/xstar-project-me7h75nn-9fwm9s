import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-red-600 mb-4">AI - VidNexus</h2>
      <p className="text-gray-700 mb-2">
        Welcome to AI's VidNexus, where we leverage cutting-edge technology to create stunning AI-generated videos.
      </p>
      <p className="text-gray-700 mb-2">
        Our platform utilizes advanced algorithms to analyze data and generate high-quality video content tailored to your needs.
      </p>
      <p className="text-gray-700 mb-4">
        Experience the future of video creation with AI's innovative solutions, designed for modern businesses.
      </p>
      <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out focus:outline-none">
        Get Started
      </button>
      <div className="mt-4">
        {children}
      </div>
    </motion.div>
  );
};

export default SlideUp;