import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const buttonVariants = {
  primary: 'bg-red-600 text-white hover:bg-red-500',
  secondary: 'bg-orange-500 text-white hover:bg-orange-400',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  return (
    <motion.div
      className={`transition-transform duration-300 transform rounded-lg px-6 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${buttonVariants[variant]`}}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={Button for ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;