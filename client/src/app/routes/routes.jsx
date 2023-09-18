import React from "react"
import HomePage from "../components/pages/homePage"
import ServicesListPage from "../components/pages/servicesListPage"
import CommentsPage from "../components/pages/commentsPage"
import RegisterPage from "../components/pages/registerPage"
import LoginPage from "../components/pages/loginPage/loginPage"
import Login from "../layout/login"
import { Navigate } from "react-router-dom"
import AdminPage from "../components/pages/adminPage/adminPage"

export const Routes = (isLoggedIn, location) => [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "services",
    element: <ServicesListPage />
  },
  {
    path: "comments",
    element: <CommentsPage />
  },
  {
    path: "",
    element: <Login />,
    children: [
      { path: "", element: <Navigate to={"login"} /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "*", element: <Navigate to={"login"} /> }
    ]
  },
  {
    path: "userPage",
    element: <AdminPage />
  }
]

export default Routes
