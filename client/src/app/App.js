import React from "react"
import { useLocation, useRoutes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import routes from "./routes/routes"

import { HamburgerMenu } from "./components/ui/nav/hamburgerMenu"
import Modal from "./components/common/modal"
import { Footer } from "./components/ui/main"
import AppLoader from "./components/ui/hos/appLoader"
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "./store/slices/userSlice"

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn())
  const location = useLocation()
  const elements = useRoutes(routes(isLoggedIn, location))
  return (
    <div>
      <AppLoader>
        <HamburgerMenu />
        {elements}
        <Footer />
        <Modal />
      </AppLoader>
      <ToastContainer />
    </div>
  )
}

export default App
