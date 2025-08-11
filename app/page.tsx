import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-red-500 to-orange-500 text-white text-center">
      <motion.div
        className="text-6xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to AI
      </motion.h1>
      <motion.div
        className="text-2xl mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Create stunning AI-generated videos with VidNexus
      </motion.p>
      <motion.div
        className="bg-white text-red-500 font-semibold py-2 px-4 rounded shadow-lg hover:bg-red-500 hover:text-white transition duration-300"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        Get Started
      </motion.button>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-red-500">Features of AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-orange-500">Intelligent Video Creation</h3>
            <p>Utilize advanced AI algorithms to generate videos that captivate your audience.</p>
          </motion.div>
          <motion.div
            className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-orange-500">Customizable Templates</h3>
            <p>Choose from a variety of templates tailored to suit your branding and style.</p>
          </motion.div>
          <motion.div
            className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-orange-500">Seamless Integration</h3>
            <p>Integrate AI with your existing tools and platforms effortlessly.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LuxuryDesignSection = () => {
  return (
    <section className="py-20 bg-red-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Experience Luxury with AI</h2>
        <p className="text-lg mb-6">
          Our state-of-the-art technology ensures that your AI video production is not only efficient but also luxurious.
        </p>
        <motion.div
          className="bg-white text-red-500 font-semibold py-2 px-4 rounded shadow-lg hover:bg-red-600 hover:text-white transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Discover More
        </motion.button>
      </div>
    </section>
  );
};

const AIHomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <LuxuryDesignSection />
    </div>
  );
};

export default AIHomePage;