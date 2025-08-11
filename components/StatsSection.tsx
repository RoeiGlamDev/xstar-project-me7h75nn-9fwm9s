import React from 'react';
import { motion } from 'framer-motion';

interface StatsProps {
  achievements: number;
  satisfiedClients: number;
  videosCreated: number;
  aiTechnologyUsed: number;
}

const StatsSection: React.FC<StatsProps> = ({ achievements, satisfiedClients, videosCreated, aiTechnologyUsed }) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">AI's Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <motion.div
            className="bg-orange-500 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-semibold">{achievements}</h3>
            <p className="text-lg">Achievements in AI Technology</p>
          </motion.div>
          <motion.div
            className="bg-red-500 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-semibold">{satisfiedClients}</h3>
            <p className="text-lg">Satisfied Clients Worldwide</p>
          </motion.div>
          <motion.div
            className="bg-orange-500 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-semibold">{videosCreated}</h3>
            <p className="text-lg">AI Videos Created</p>
          </motion.div>
          <motion.div
            className="bg-red-500 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-semibold">{aiTechnologyUsed}</h3>
            <p className="text-lg">AI Technologies Used</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;