import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Transform Your Ideas with AI", 
  subtitle = "Create stunning AI-generated videos effortlessly with VidNexus.", 
  buttonText = "Get Started", 
  buttonLink = "/get-started" 
}) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-12 px-4">
      <motion.div 
        className="text-4xl font-bold text-red-600 mb-4"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="text-lg text-gray-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
      >
        {subtitle}
      </motion.p>
      <motion.div 
        href={buttonLink} 
        className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        initial={{ scale: 1 }} 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.a>
    </section>
  );
};

export default CTASection;