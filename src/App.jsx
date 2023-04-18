import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './pages/singup/Signup';
import Signin from './pages/signin/Singin';
import Todo from './pages/todo/Todo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <p>Home</p>,
    errorElement: <p>Not Found</p>,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/todo',
    element: <Todo />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
