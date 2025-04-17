import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Handle window load event for the initial page load
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Add the event listener for window load
    window.addEventListener('load', handleLoad);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Handle loader for route changes
  useEffect(() => {
    setIsLoading(true); // Start loading on route change

    const timer = setTimeout(() => {
      setIsLoading(false); // Simulate loading delay
    }, 2000); // Adjust as needed for actual loading

    return () => clearTimeout(timer); // Cleanup timeout
  }, [location]); // Run this effect whenever the route changes

  return (
    <>
      {isLoading ? (
        <div className="fixed-top bg-light d-flex align-items-center justify-content-center h-100">
          <div className="spinner-border text-primary" style={{width: '6rem', height: '6rem', fontWeight: 'bold'}} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default PageLoader;
