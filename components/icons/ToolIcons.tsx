import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const AfterEffectsIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#1E003B"/>
    <path d="M13.5 36L20.5 12H27.5L34.5 36H28L26.5 31.5H19.5L18 36H13.5ZM20.75 27H25.25L23 20.25L20.75 27Z" fill="#D59DFF"/>
  </svg>
);

export const PremiereProIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#200021"/>
    <path d="M13 36V12H22C25.3137 12 28 14.6863 28 18C28 21.3137 25.3137 24 22 24H18V36H13ZM18 16.5V19.5H22C23.6569 19.5 25 18.1569 25 16.5C25 14.8431 23.6569 13.5 22 13.5H18V16.5Z" fill="#E599FF"/>
    <path d="M28 36V12H32L36 24L40 12H44V36H39V20L36 29L33 20V36H28Z" fill="#E599FF"/>
  </svg>
);

export const DaVinciResolveIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-8c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm8 0c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3z"/>
    <rect x="10.5" y="10.5" width="3" height="3" rx="1.5" />
  </svg>
);


export const CapCutIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.28 14.28L6.72 6.72l1.41-1.41 9.56 9.56-1.41 1.41zM7 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm10 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg>
);