import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import DashboardLayout from "./layouts/DashboardLayout";
import AnalyticsPage from "./pages/BooksPage";
import AuthLayout from "./layouts/AuthLayout";

const Router = createBrowserRouter([
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      { 
        path: "home", 
        element: <HomePage />,
      },
      { 
        path: "analytics", 
        element: <AnalyticsPage />,
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { 
        path: "login", 
        element: <LoginPage />,
      },
      { 
        path: "register", 
        element: <RegisterPage />,
      },
    ],   
  },
]);


export default Router;
