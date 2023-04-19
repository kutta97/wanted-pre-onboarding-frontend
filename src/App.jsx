import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NoRequireAuth from '@components/layout/NoRequireAuth';
import RequireAuth from '@components/layout/RequireAuth';

import Home from '@pages/home/home';
import Signin from '@pages/signin/Singin';
import Signup from '@pages/singup/Signup';
import Todo from '@pages/todo/Todo';

const App = () => (
  <Routes>
    <Route path="*" element={<Home />} />
    <Route
      path="/signup"
      element={
        <NoRequireAuth>
          <Signup />
        </NoRequireAuth>
      }
    />
    <Route
      path="/signin"
      element={
        <NoRequireAuth>
          <Signin />
        </NoRequireAuth>
      }
    />
    <Route
      path="/todo"
      element={
        <RequireAuth>
          <Todo />
        </RequireAuth>
      }
    />
  </Routes>
);

export default App;
