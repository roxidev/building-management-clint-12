import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../pages/Home/Home';
import MainLayout from '../Layout/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
