import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  validationMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, validationMessage }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col mb-4">
      <label className="text-white mb-1 font-semibold">
        {label}
      </label>
      <motion.div
        type={type}
        placeholder={placeholder}
        className={py-2 px-4 rounded border-2 focus:outline-none transition-colors duration-200 
          ${isFocused ? 'border-orange-500' : 'border-white'} 
          bg-transparent text-white placeholder-white}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        whileHover={{ scale: 1.02 }}
      />
      {validationMessage && (
        <span className="text-red-500 text-sm mt-1">{validationMessage}</span>
      )}
    </div>
  );
};

export default Input;