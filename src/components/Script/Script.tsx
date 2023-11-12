import React, { useEffect } from 'react';



const Script: React.FC = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = '../../assets/oneko.js';
    script.async = true;

    // Append script to the body
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Dependency array to re-run effect if src changes

  return null; // This component doesn't render anything
};

export default Script;