import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    position: 'CEO & Co-Founder',
    bio: 'Alice has over a decade of experience in AI technology, leading innovative projects in video creation.',
    imageUrl: '/images/alice.jpg',
  },
  {
    name: 'Bob Smith',
    position: 'CTO & Co-Founder',
    bio: 'Bob is a tech visionary with expertise in machine learning and video processing technologies.',
    imageUrl: '/images/bob.jpg',
  },
  {
    name: 'Charlie Lee',
    position: 'Product Manager',
    bio: 'Charlie specializes in user experience, ensuring that AI’s products meet customer needs.',
    imageUrl: '/images/charlie.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-red-600">About AI</h1>
        <p className="mt-4 text-lg">
          At AI, we are dedicated to revolutionizing video creation with cutting-edge artificial intelligence technology.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-orange-500">Our History</h2>
        <p className="mt-2">
          Founded in 2023, AI emerged from the vision of a group of technology enthusiasts looking to blend creativity and innovation in video production. Our journey started with a simple idea: to empower creators with AI-driven tools that make video creation accessible to everyone.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-red-600">Our Values</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Innovation: Pioneering the future of video technology.</li>
          <li>Accessibility: Making powerful tools available to all creators.</li>
          <li>Collaboration: Partnering with creatives to push boundaries.</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-orange-500">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <img src={member.imageUrl} alt={member.name} className="rounded-full w-32 h-32 mx-auto" />
              <h3 className="text-xl font-bold text-red-600 mt-4">{member.name}</h3>
              <p className="text-orange-500">{member.position}</p>
              <p className="mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;