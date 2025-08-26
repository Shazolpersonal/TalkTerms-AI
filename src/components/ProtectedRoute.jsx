import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // If not authenticated, redirect to the landing page
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
