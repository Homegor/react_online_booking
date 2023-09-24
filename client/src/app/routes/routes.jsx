import React from "react"
import ServicesListPage from "../components/pages/servicesListPage"
import CommentsPage from "../components/pages/commentsPage"
import Home from "../layout/home"
import Profile from "../layout/profile"
import AboutUserList from "../components/ui/adminProfile/aboutUserList"
import StatisticsUserList from "../components/ui/adminProfile/statisticsUserList/statisticsUserList"
import BookingUserList from "../components/ui/adminProfile/bookingUserList/bookingUserList"
import SettingsUserList from "../components/ui/adminProfile/settingsUserList/settingsUserList"
import EditUsrList from "../components/ui/adminProfile/editUserList/editUsrList"
import Login from "../layout/login"
import { Navigate } from "react-router-dom"
import LoginPage from "../components/pages/loginPage"
import RegisterPage from "../components/pages/registerPage"

export const Routes = (isLoggedIn, location) => [
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "", element: "" },
      { path: "", element: "" },
      { path: "", element: "" },
      { path: "", element: "" },
      { path: "", element: "" },
      { path: "", element: "" }
    ]
  },
  {
    path: "booking",
    element: <ServicesListPage />
  },
  {
    path: "comments",
    element: <CommentsPage />
  },
  {
    path: "auth",
    element: <Login />,
    children: [
      {
        path: "",
        element: <Navigate to={"./login"} />
      },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "*", element: <Navigate to={"../login"} /> }
    ]
  },
  {
    path: "userPage",
    element: <Profile />,
    children: [
      { path: "", element: <AboutUserList /> },
      { path: "static", element: <StatisticsUserList /> },
      { path: "booking", element: <BookingUserList /> },
      { path: "settings", element: <SettingsUserList /> },
      { path: "edit", element: <EditUsrList /> },
      { path: "*", element: <AboutUserList /> }
    ]
  }
]

export default Routes
