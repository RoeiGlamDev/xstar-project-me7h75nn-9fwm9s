import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-orange-500 opacity-40"></div>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold text-red-600">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
      <style jsx>{
        .bg-glass {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }
      }</style>
    </motion.div>
  );
};

export default Card;