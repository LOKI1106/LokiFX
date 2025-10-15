
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LocationPinIcon: React.FC<IconProps> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    {...props}
    >
    <path 
        fillRule="evenodd" 
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 005.16-4.249 9.868 9.868 0 002.05-6.522c0-5.52-4.47-10-10-10S2 6.53 2 12.052a9.868 9.868 0 002.05 6.522 16.975 16.975 0 005.16 4.249zM12 14.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" 
        clipRule="evenodd" 
    />
  </svg>
);
