import React from 'react';
import ClientLayout from './clients/ClientLayout';
// import DashboardLayout from './Dashboards/DashboardLayout';
import DashboardLayout from './Dashboards/LOG/DashboardLayout';
import Authentication from './Dashboards/AUTH/Authentication';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// client routers 
import Home from './clients/pages/Home';
import About from './clients/pages/About';
import Blog from './clients/pages/Blog';
import ContactUs from './clients/pages/ContactUs';
import Course from './clients/pages/Course';


// DashboardLayout routers 

import Viewstudent from './Dashboards/componet/student/viewstudent';
// Define the routes using createBrowserRouter


// authentication routers 

// import Login from './Dashboards/AUTH/Login';
import Login from './Dashboards/AUTH/Login';
import Register from './Dashboards/AUTH/Register';



const router = createBrowserRouter([
  {
    path: '/*',
    element: <ClientLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'course',
        element: <Course />,
      },
      {
        path: 'blog',
        element: <Blog/>,
      },
      {
        path: 'contact',
        element: <ContactUs />,
      },
    ],
  },
  {
    path: '/dashboard/*',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <Viewstudent />,
      },

    ],
   
  },
  {
    path: '/authentication/*',
    element: <Authentication />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },


    ],
   
  },

]);



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
