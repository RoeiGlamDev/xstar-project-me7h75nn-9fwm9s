import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alice Johnson', role: 'CEO', expertise: 'AI Strategy & Innovation' },
  { name: 'Bob Smith', role: 'CTO', expertise: 'Machine Learning & Data Science' },
  { name: 'Cathy Lee', role: 'CMO', expertise: 'Digital Marketing & Growth' },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-4xl font-bold text-orange-500 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About AI
        </motion.h2>
        <motion.div
          className="text-lg mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At AI, we are committed to revolutionizing the way videos are created and shared. Our
          journey began with a vision to harness artificial intelligence to empower creators,
          marketers, and businesses to produce stunning videos effortlessly. Our innovative
          platform, VidNexus, leverages cutting-edge machine learning algorithms to automate the
          video creation process, making it accessible to anyone, regardless of their technical
          skills.
        </motion.p>
        <motion.div
          className="text-2xl font-semibold text-red-500 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Mission
        </motion.h3>
        <motion.div
          className="text-lg mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our mission at AI is to democratize video creation by providing advanced AI tools that
          empower users to unleash their creativity without the complexity traditionally
          associated with video production. We strive to be at the forefront of technology,
          continuously evolving to meet the needs of our users and setting new standards in the
          industry.
        </motion.p>
        <motion.div
          className="text-2xl font-semibold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Meet Our Team
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-red-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-red-600">{member.name}</h4>
              <p className="text-md text-orange-600">{member.role}</p>
              <p className="text-sm text-gray-600">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-2xl font-semibold text-red-500 mt-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Our Values and Achievements
        </motion.h3>
        <motion.div
          className="text-lg mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          At AI, we value innovation, integrity, and inclusivity. Our achievements include being
          recognized as a leader in the AI technology sector and winning multiple awards for our
          groundbreaking work in video automation. We are dedicated to pushing the boundaries of
          what is possible and helping our users succeed in their creative endeavors.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;