import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
    name: string;
    email: string;
    message: string;
}

const ContactPage: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <motion.div 
                className="text-4xl font-bold text-red-600 mb-6"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                Contact AI
            </motion.h1>
            <form onSubmit={handleSubmit} className="bg-orange-500 p-8 rounded shadow-md w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea 
                        id="message" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required 
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                >
                    Send Message
                </button>
            </form>

            <motion.div 
                className="mt-10 text-center text-red-600"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold">Our Location</h2>
                <p className="mt-2">123 Tech Lane, Silicon Valley, CA 94043</p>
                <h3 className="text-xl font-bold mt-4">Business Hours</h3>
                <p>Monday - Friday: 9 AM - 5 PM</p>
                <p>Saturday: 10 AM - 4 PM</p>
                <p>Sunday: Closed</p>
            </motion.div>
        </div>
    );
};

export default ContactPage;