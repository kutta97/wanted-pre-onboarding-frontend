import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const NoRequireAuth = ({ children }) => {
  const auth = useAuth();

  if (auth) {
    return <Navigate to="/todo" replace />;
  }

  return children;
};

export default NoRequireAuth;
