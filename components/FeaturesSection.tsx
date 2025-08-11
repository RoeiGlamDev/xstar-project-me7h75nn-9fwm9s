import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'AI Video Creation',
    description: 'Harness the power of AI to generate high-quality videos effortlessly.',
    icon: <i className="fas fa-video text-red-500"></i>,
  },
  {
    title: 'Real-Time Editing',
    description: 'Edit your videos in real-time with our intuitive AI tools.',
    icon: <i className="fas fa-edit text-orange-500"></i>,
  },
  {
    title: 'Automated Transcriptions',
    description: 'Get accurate transcriptions of your videos automatically powered by AI.',
    icon: <i className="fas fa-file-alt text-white"></i>,
  },
  {
    title: 'Seamless Sharing',
    description: 'Share your AI-generated videos across multiple platforms with a single click.',
    icon: <i className="fas fa-share-alt text-red-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-white p-10">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-8">Explore Our AI Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-orange-500 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-5xl mb-4 text-white">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="text-white mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;