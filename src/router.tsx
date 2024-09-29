import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import BooksPage from "./pages/BooksPage";
import CreateBook from "./pages/CreateBook";

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
        path: "books", 
        element: <BooksPage />,
      },
      { 
        path: "books/create", 
        element: <CreateBook />,
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
