import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/singup/Signup';
import Signin from './pages/signin/Singin';
import Todo from './pages/todo/Todo';
import RequireAuth from './components/layout/RequireAuth';
import NoRequireAuth from './components/layout/NoRequireAuth';
import Home from './pages/home/home';

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
