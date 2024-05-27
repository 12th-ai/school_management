import React from 'react';
import ClientLayout from './clients/ClientLayout';
import DashboardLayout from './Dashboards/DashboardLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define the routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <ClientLayout />,
  },
  {
    path: '/dashboard/*',
    element: <DashboardLayout />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
