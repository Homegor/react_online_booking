import React from "react"
import HomePage from "./components/page/homePage"
import Login from "./layouts/login"
import ServicesListPage from "./components/page/servicesListPage"
import CommentsPage from "./components/page/commentsPage"
import UserListPage from "./components/page/userListPage"
import BookingUsers from "./layouts/bookingUsers"
import { Navigate } from "react-router-dom"
import AboutUser from "./layouts/aboutUser"

const Routes = (isLoggedIn, location) => [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "comments",
    element: <CommentsPage />
  },
  {
    path: "services",
    element: <ServicesListPage />
  },
  {
    path: "auth/login",
    element: <Login />
  },
  {
    path: "/userPage",
    element: <UserListPage />,
    children: [
      { path: "", element: <Navigate to={"/auth/userPage"} /> },
      { path: "about", element: <AboutUser /> },
      { path: "booking", element: <BookingUsers /> },
      { path: "*", element: <Navigate to={"/auth/userPage"} /> }
    ]
  }
]

export default Routes
