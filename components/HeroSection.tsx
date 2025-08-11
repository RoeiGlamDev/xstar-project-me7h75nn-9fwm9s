import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "Welcome to AI",
  subtitle = "Revolutionizing video creation with cutting-edge AI technology.",
  ctaText = "Create Your Video",
  ctaLink = "#"
}) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-500 to-orange-500 text-white px-4">
      <motion.div 
        className="text-5xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.div 
        className="text-xl mb-8 text-center max-w-xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {subtitle}
      </motion.p>
      <motion.div 
        href={ctaLink} 
        className="bg-white text-red-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-red-500 hover:text-white transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {ctaText}
      </motion.a>
      <div className="mt-10 text-center">
        <p className="text-sm">Trusted by industry leaders</p>
        <div className="flex justify-center space-x-4 mt-2">
          <img src="/path/to/logo1.png" alt="Company Logo 1" className="h-8" />
          <img src="/path/to/logo2.png" alt="Company Logo 2" className="h-8" />
          <img src="/path/to/logo3.png" alt="Company Logo 3" className="h-8" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;