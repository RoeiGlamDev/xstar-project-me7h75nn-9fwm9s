import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
    links: { name: string; url: string }[];
    socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ links, socialMedia }) => {
    return (
        <footer className="bg-white text-red-600 py-6">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row justify-between items-center"
                >
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">AI - VidNexus</h2>
                        <p className="text-sm text-gray-600">
                            Transforming the way you create videos with AI technology.
                        </p>
                    </div>
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        {links.map((link) => (
                            <motion.div
                                key={link.name}
                                href={link.url}
                                className="text-orange-500 hover:text-red-500 transition duration-200"
                                whileHover={{ scale: 1.05 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>
                    <div className="flex space-x-4">
                        {socialMedia.map((media) => (
                            <motion.div
                                key={media.platform}
                                href={media.url}
                                className="text-orange-500 hover:text-red-500 transition duration-200"
                                whileHover={{ scale: 1.05 }}
                                aria-label={Follow us on ${media.platform}}
                            >
                                <i className={`fab fa-${media.platform.toLowerCase()`}}></i>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
                <div className="mt-6 border-t border-gray-300 pt-4 text-center">
                    <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;