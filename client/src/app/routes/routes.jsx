import React from "react"
import ServicesListPage from "../components/pages/servicesListPage"
import CommentsPage from "../components/pages/commentsPage"
import RegisterPage from "../components/pages/registerPage"
import LoginPage from "../components/pages/loginPage/loginPage"
import Login from "../layout/login"
import { Navigate } from "react-router-dom"
import Home from "../layout/home"
import Profile from "../layout/profile"
import AboutUserList from "../components/ui/adminProfile/aboutUserList"
import StatisticsUserList from "../components/ui/adminProfile/statisticsUserList/statisticsUserList"
import BookingUserList from "../components/ui/adminProfile/bookingUserList/bookingUserList"
import SettingsUserList from "../components/ui/adminProfile/settingsUserList/settingsUserList"
import EditUsrList from "../components/ui/adminProfile/editUserList/editUsrList"

export const Routes = (isLoggedIn, location) => [
  {
    path: "/",
    element: <Home />
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
    path: "login",
    element: <Login />,
    children: [
      { path: "", element: <Navigate to={"login"} /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> }
    ]
  },
  {
    path: "userPage",
    element: <Profile />,
    children: [
      { path: "about", element: <AboutUserList /> },
      { path: "static", element: <StatisticsUserList /> },
      { path: "booking", element: <BookingUserList /> },
      { path: "settings", element: <SettingsUserList /> },
      { path: "edit", element: <EditUsrList /> },
      { path: "*", element: <AboutUserList /> }
    ]
  }
]

export default Routes
