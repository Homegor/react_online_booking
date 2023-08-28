import React from "react"
import HomePage from "./components/page/homePage"
import Login from "./layouts/login"
import ServicesListPage from "./components/page/servicesListPage"
import CommentsPage from "./components/page/commentsPage"
import UserListPage from "./components/page/userListPage"

const Routes = () => [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/comments",
    element: <CommentsPage />
  },
  {
    path: "/services",
    element: <ServicesListPage />
  },
  {
    path: "/auth/login",
    element: <Login />
  },
  {
    path: "/userPage",
    element: <UserListPage />
  }
]

export default Routes
