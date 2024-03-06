import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './Pages/Login';
import Welcome from './Pages/Welcome';
import CourseList from './Pages/Courses';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/LoginPage",
    element: <LoginPage/>,
  },
  {
    path: "/Welcome",
    element: <Welcome/>,
  },
  {
    path: "/courses",
    element: <CourseList/>,
  },
]);

const root = (ReactDOM.createRoot(document.getElementById("root")));
root.render(
  <RouterProvider router={router} />
)
