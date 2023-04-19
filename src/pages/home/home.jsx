import React from 'react';
import { Navigate } from 'react-router-dom';

import useAuth from '@hooks/useAuth';

const Home = () => {
  const auth = useAuth();

  if (!auth) {
    return <Navigate to="/signin" replace />;
  }
  return <Navigate to="/todo" replace />;
};

export default Home;
