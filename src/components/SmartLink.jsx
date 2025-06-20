import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SmartLink = ({ to, children, onClick, ...props }) => {
  const location = useLocation();

  const handleClick = (e) => {
    // Only set internalNavigation flag if we're navigating to a different path
    if (location.pathname !== to) {
      sessionStorage.setItem('internalNavigation', 'true');
    }
    
    // Call the original onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default SmartLink;