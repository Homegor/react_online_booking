import React, { StrictMode } from "react"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"

import "bootstrap/dist/css/bootstrap.css"
import "./app/style/index.scss"

import App from "./app/App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)