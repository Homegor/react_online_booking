import React from "react"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"

import "bootstrap/dist/css/bootstrap.css"
import "./app/scss/style.scss"

import App from "./app/App"
import { createStore } from "./app/store/createStore"
import { Provider } from "react-redux"
import history from "./app/utils/history"

const store = createStore()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>
)
