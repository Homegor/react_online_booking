import React from "react"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"

import "bootstrap/dist/css/bootstrap.css"
import "./app/scss/style.scss"

import App from "./app/App"
import { Provider } from "react-redux"
import { createStore } from "./app/store/createStore"

const store = createStore()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
