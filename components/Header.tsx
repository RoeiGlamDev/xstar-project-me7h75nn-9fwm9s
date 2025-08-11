import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-red-600 font-bold text-2xl"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img src={logo} alt="AI Logo" className="h-10" />
          VidNexus
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          <motion.div
            href="#features"
            className="text-orange-500 hover:text-red-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Features
          </motion.a>
          <motion.div
            href="#about"
            className="text-orange-500 hover:text-red-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#contact"
            className="text-orange-500 hover:text-red-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-red-600 focus:outline-none"
          >
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="bg-white text-black md:hidden"
          initial={{ opacity: 0, height: 0}}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="flex flex-col p-4 space-y-2">
            <motion.div
              href="#features"
              className="text-orange-500 hover:text-red-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Features
            </motion.a>
            <motion.div
              href="#about"
              className="text-orange-500 hover:text-red-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.a>
            <motion.div
              href="#contact"
              className="text-orange-500 hover:text-red-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;