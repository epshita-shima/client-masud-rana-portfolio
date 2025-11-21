import React from "react";
import Home from "../pages/Home/Home/Home";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Support from "../components/Support";
import Work from "../components/Work";
import { path } from "framer-motion/client";
import Blog from "../components/Blog";
import Article from "../pages/Article/Article";
import Checkout from "../components/Checkout";
import OrderSuccess from "../components/OrderSuccess";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminLayout from "../Layout/AdminLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import NotFound from "../pages/NotFound";
import Services from "../components/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/work",
        element: <Work></Work>,
      },
      {
        path:"services",
        element:<Services></Services>
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/article",
        element: <Article></Article>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/order-success",
        element: <OrderSuccess></OrderSuccess>,
      },
      {
        path: "/admin/login",
        element: <AdminLogin></AdminLogin>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/login" replace />
      },
      {
        path: "login",
        element: <AdminLogin></AdminLogin>,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      }
    ],
  },
  // Add catch-all route for 404 pages
  {
    path: "*",
    element: <NotFound /> // Create this component
  }
]);
