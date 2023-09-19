import React from "react"
import { useLocation, useRoutes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import routes from "./routes/routes"

import { HamburgerMenu } from "./components/ui/nav/hamburgerMenu"
import Modal from "./components/common/modal"

function App() {
  const location = useLocation()
  const elements = useRoutes(routes(location))
  return (
    <div>
      <HamburgerMenu />
      {elements}

      <ToastContainer />
      <Modal />
    </div>
  )
}

export default App
