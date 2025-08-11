import React from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$19/month',
    features: [
      'Access to AI video generator',
      'Basic templates',
      'Export in HD',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$49/month',
    features: [
      'All Basic features',
      'Advanced AI editing tools',
      'Custom templates',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    features: [
      'All Pro features',
      'Team collaboration tools',
      'Dedicated account manager',
      'Custom integrations',
    ],
  },
];

const FAQ = [
  {
    question: 'What is AI?',
    answer: 'AI is the leading platform for creating stunning videos using advanced artificial intelligence.',
  },
  {
    question: 'How does the pricing work?',
    answer: 'Choose a plan that suits your needs, and you can upgrade or downgrade anytime.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel your subscription at any time from your account settings.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-black p-8">
      <h1 className="text-4xl font-bold text-orange-600 mb-4">AI Pricing Plans</h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.name}
            className="border rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold text-red-600">{plan.name}</h2>
            <p className="text-xl font-bold text-orange-500">{plan.price}</p>
            <ul className="mt-4">
              {plan.features.map((feature) => (
                <li key={feature} className="text-gray-700">{feature}</li>
              ))}
            </ul>
            <button className="mt-6 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700">
              Select Plan
            </button>
          </motion.div>
        ))}
      </section>

      <h2 className="text-3xl font-bold text-orange-600 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {FAQ.map((item) => (
          <motion.div
            key={item.question}
            className="border-b pb-2"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-red-600">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;