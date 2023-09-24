import React from "react"
import { useLocation, useRoutes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import routes from "./routes/routes"

import { HamburgerMenu } from "./components/ui/nav/hamburgerMenu"
import Modal from "./components/common/modal"
import { Footer } from "./components/ui/main"

function App() {
  const location = useLocation()
  const elements = useRoutes(routes(location))
  return (
    <div>
      <HamburgerMenu />
      {elements}
      <Footer />

      <ToastContainer />
      <Modal />
    </div>
  )
}

export default App
