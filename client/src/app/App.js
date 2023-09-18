import React from "react"
import { useLocation, useRoutes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import HamburgerMenu from "./components/ui/nav/hamburgerMenu"
import { Footer } from "./layouts/main"
import Modal from "./components/ui/modal/modal"
import routes from "./routes/routes"

function App() {
  const location = useLocation()
  const elements = useRoutes(routes(location))
  return (
    <div className={"container"}>
      <HamburgerMenu />
      {elements}
      <Modal />
      <Footer />
        <ToastContainer/>
    </div>
  )
}

export default App
