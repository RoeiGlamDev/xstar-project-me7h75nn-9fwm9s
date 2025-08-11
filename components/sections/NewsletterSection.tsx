import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title = "Stay Updated with AI",
  description = "Join our newsletter to receive the latest updates on VidNexus and our innovative AI video solutions.",
}) => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission logic (e.g., API call)
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
      <motion.div 
        className="text-3xl font-bold text-center text-red-600 mb-4"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="text-center text-gray-700 mb-6"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center">
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Enter your email" 
            className="border border-gray-300 rounded-lg p-2 md:mr-2 mb-4 md:mb-0 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <motion.div 
            type="submit" 
            className="bg-red-600 text-white rounded-lg p-3 transition-transform duration-300 hover:scale-105" 
            whileHover={{ scale: 1.05 }}
          >
            Subscribe
          </motion.button>
        </form>
      ) : (
        <motion.div 
          className="text-center text-green-600 mt-4"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Thank you for subscribing to AI! Stay tuned for updates on VidNexus.
        </motion.p>
      )}
    </section>
  );
};

export default NewsletterSection;