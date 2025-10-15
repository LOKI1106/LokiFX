import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200/50 dark:bg-black/50 border-t border-brand-cyan/20 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Designed and Developed by Navale Lokesh
        </p>
      </div>
    </footer>
  );
};

export default Footer;