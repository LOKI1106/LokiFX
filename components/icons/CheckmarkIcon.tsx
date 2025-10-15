import React from 'react';
import { motion } from 'framer-motion';

export const CheckmarkIcon: React.FC = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16 text-green-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <motion.path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  </motion.svg>
);
