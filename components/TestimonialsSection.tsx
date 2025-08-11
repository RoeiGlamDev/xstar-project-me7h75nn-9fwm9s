import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    role: 'CTO',
    company: 'Tech Innovators',
    content: 'AI has revolutionized our video production process. The efficiency and creativity they bring are unmatched!',
    rating: 5,
    photo: '/images/john.jpg',
  },
  {
    name: 'Samantha Smith',
    role: 'Marketing Director',
    company: 'Creative Solutions',
    content: 'Thanks to AI, our marketing videos have seen a 300% increase in engagement. Their technology is a game-changer!',
    rating: 5,
    photo: '/images/samantha.jpg',
  },
  {
    name: 'Michael Brown',
    role: 'Product Manager',
    company: 'Future Tech',
    content: 'Working with AI has allowed us to produce high-quality video content in record time. Highly recommended!',
    rating: 4,
    photo: '/images/michael.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">What Our Clients Say About AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-orange-500 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <img src={testimonial.photo} alt={${testimonial.name}'s photo} className="w-16 h-16 rounded-full mb-4" />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm mb-2">{testimonial.role} at {testimonial.company}</p>
              <p className="mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21 16.54 14.97 22 10.91 15.82 10.36 12 4 8.18 10.36 2 10.91 7.46 14.97 5.82 21 12 17.27z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;