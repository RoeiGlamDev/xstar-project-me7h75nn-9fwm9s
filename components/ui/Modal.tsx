import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-red-600 mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{content}</p>
        <button
          onClick={onClose}
          className="bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600 transition duration-300 ease-in-out"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;