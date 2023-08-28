import React from "react"
import { useLocation, useRoutes } from "react-router-dom"

// import HomePage from "./components/page/homePage"
// import ServicesListPage from "./components/page/servicesListPage"
import HamburgerMenu from "./components/ui/nav/hamburgerMenu"
import { Footer } from "./layouts/main"
// import CommentsPage from "./components/page/commentsPage"
// import Login from "./layouts/login"
// import UserListPage from "./components/page/userListPage"
import Modal from "./components/ui/modal/modal"
import routes from "./routes"

function App() {
  const location = useLocation()
  const elements = useRoutes(routes(location))
  return (
    <div className={"container"}>
      <HamburgerMenu />
      {elements}
      {/*      <Switch>
        <Route path={"/services"} component={ServicesListPage} />
        <Route path={"/comments"} component={CommentsPage} />
        <Route path={"/auth/login"} component={Login} />
        <Route path={"/userPage"} component={UserListPage} />
        <Route path={"/"} exact component={HomePage} />
      </Switch>*/}

      <Modal />
      <Footer />
    </div>
  )
}

export default App
