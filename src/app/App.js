import React from "react"
import { Route, Switch } from "react-router-dom"

import HomePage from "./components/page/homePage"
import ServicesListPage from "./components/page/servicesListPage"
import HamburgerMenu from "./components/ui/nav/hamburgerMenu"
import { Footer } from "./layouts/main"
import CommentsPage from "./components/page/commentsPage"
import Login from "./layouts/login"
import UserListPage from "./components/page/userListPage"

function App() {
  return (
    <div className={"container"}>
      <HamburgerMenu />
      <Switch>
        <Route path={"/services"} component={ServicesListPage} />
        <Route path={"/comments"} component={CommentsPage} />
        <Route path={"/userpage"} component={UserListPage} />
        <Route path={"/login/:type?"} component={Login} />
        <Route path={"/"} exact component={HomePage} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
