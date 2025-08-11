import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
    reason: '',
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formValues.name) newErrors.name = 'Name is required';
    if (!formValues.email) newErrors.email = 'Email is required';
    if (!formValues.message) newErrors.message = 'Message is required';
    if (!formValues.reason) newErrors.reason = 'Reason for contact is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formValues);
      // Handle form submission logic here
    }
  };

  return (
    <section className="bg-white text-gray-800 py-12 px-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }} 
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-red-600 mb-4">Contact AI</h2>
        <p className="text-lg mb-8">For inquiries about our cutting-edge AI video solutions, please fill out the form below.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formValues.name} 
              onChange={handleChange} 
              className={mt-1 p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}} 
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formValues.email} 
              onChange={handleChange} 
              className={mt-1 p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}} 
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Reason for Contact</label>
            <select 
              name="reason" 
              value={formValues.reason} 
              onChange={handleChange} 
              className={mt-1 p-2 border rounded ${errors.reason ? 'border-red-500' : 'border-gray-300'}} 
            >
              <option value="">Select a reason</option>
              <option value="Inquiry">Inquiry</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Partnership">Partnership</option>
            </select>
            {errors.reason && <p className="text-red-500 text-xs">{errors.reason}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              name="message" 
              value={formValues.message} 
              onChange={handleChange} 
              className={mt-1 p-2 border rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}} 
              placeholder="Your Message"
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
          </div>

          <button 
            type="submit" 
            className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-red-600">Business Information</h3>
          <p>Location: 123 AI Innovations St, Tech City, TX 12345</p>
          <p>Business Hours: Mon-Fri, 9 AM - 5 PM</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;