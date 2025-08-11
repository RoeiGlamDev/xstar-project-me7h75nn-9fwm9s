import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
    title: string;
    price: string;
    features: string[];
}

const pricingTiers: PricingTier[] = [
    {
        title: 'Basic',
        price: '$19/mo',
        features: [
            'Access to AI Video Creation',
            'Standard Resolution',
            'Basic Templates',
            'Email Support'
        ]
    },
    {
        title: 'Pro',
        price: '$49/mo',
        features: [
            'HD Video Creation',
            'Advanced Templates',
            'Priority Email Support',
            'Custom Branding Options'
        ]
    },
    {
        title: 'Enterprise',
        price: '$99/mo',
        features: [
            '4K Video Creation',
            'All Templates',
            '24/7 Support',
            'Dedicated Account Manager'
        ]
    }
];

const PricingSection: React.FC = () => {
    return (
        <section className="bg-white py-16 px-4 lg:px-20">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div 
                    className="text-4xl font-bold text-red-500 mb-8"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    Pricing Plans for AI Services
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingTiers.map((tier, index) => (
                        <motion.div 
                            key={index} 
                            className="border border-gray-300 rounded-lg shadow-lg p-6 bg-orange-100 hover:bg-orange-200 transition duration-300"
                            initial={{ scale: 0.95 }} 
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-2xl font-semibold text-red-500 mb-4">{tier.title}</h3>
                            <p className="text-3xl font-bold text-red-600 mb-4">{tier.price}</p>
                            <ul className="list-disc list-inside mb-6">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="text-gray-700">{feature}</li>
                                ))}
                            </ul>
                            <a 
                                href="#"
                                className="inline-block bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300" 
                            >
                                Choose Plan
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;