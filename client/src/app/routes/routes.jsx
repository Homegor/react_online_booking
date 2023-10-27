import React from "react"
import ServicesListPage from "../components/pages/servicesListPage"
import CommentsPage from "../components/pages/commentsPage"
import Home from "../layout/home"
import AboutUserList from "../components/ui/adminProfile/aboutUserList"
import StatisticsUserList from "../components/ui/adminProfile/statisticsUserList/statisticsUserList"
import BookingUserList from "../components/ui/adminProfile/bookingUserList/bookingUserList"
import SettingsUserList from "../components/ui/adminProfile/settingsUserList/settingsUserList"
import Login from "../layout/login"
import { Navigate, Outlet } from "react-router-dom"
import LoginPage from "../components/pages/loginPage"
import RegisterPage from "../components/pages/registerPage"
import CommentsUserList from "../components/ui/adminProfile/commentsUserList"
import AllUsersList from "../components/ui/adminProfile/allUsersList"
import AdminPage from "../components/pages/adminPage/adminPage"

export const Routes = (isLoggedIn, location) => [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "booking",
    element: isLoggedIn ? <ServicesListPage /> : <Navigate to={"/auth/login"} />
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
        element: <Navigate to={"/login"} />
      },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "*", element: <Navigate to={"/auth/login"} /> }
    ]
  },
  {
    path: "userPage",
    element: isLoggedIn ? (
      <AdminPage />
    ) : (
      <Navigate to={"auth/login"} state={{ referrer: location }} />
    ),
    children: [
      {
        path: ":userId",
        element: <Outlet />,
        children: [
          { path: "about", element: <AboutUserList /> },
          { path: "allUsers", element: <AllUsersList /> },
          { path: "static", element: <StatisticsUserList /> },
          {
            path: "booking",
            element: <BookingUserList />
          },
          { path: "settings", element: <SettingsUserList /> },
          { path: "comments", element: <CommentsUserList /> },
          { path: "*", element: <AboutUserList /> }
        ]
      }
    ]
  },
  { path: "*", element: <Navigate to={isLoggedIn ? "/" : "/auth/login"} /> }
]
export default Routes
