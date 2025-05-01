import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: 'var(--color-gray-100)' 
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700', 
          marginBottom: '1rem' 
        }}>404</h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--color-gray-600)', 
          marginBottom: '1rem' 
        }}>Oops! Page not found</p>
        <a href="/" style={{ 
          color: 'var(--color-primary)', 
          textDecoration: 'underline' 
        }}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;