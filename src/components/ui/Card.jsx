/**
 * Komponen Card reusable untuk berbagai konten
 */
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  gradient = false,
  ...props 
}) => {
  const baseClasses = `
    bg-white dark:bg-dark-800 rounded-xl shadow-lg border border-dark-100 dark:border-dark-700
    transition-all duration-300
  `;
  
  const hoverClasses = hover ? 'hover:shadow-2xl hover:-translate-y-1' : '';
  const gradientClasses = gradient ? 'bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-dark-800 dark:to-dark-700' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;