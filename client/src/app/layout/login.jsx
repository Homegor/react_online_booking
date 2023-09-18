import React, { useState } from "react"
import LoginPage from "../components/pages/loginPage/loginPage"
import RegisterPage from "../components/pages/registerPage"
import { useParams } from "react-router-dom"

const Login = () => {
  const { type } = useParams()
  const [formType, setFormType] = useState(type === "register" ? type : "login")
  console.log(formType)
  const toggleFormTyp = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    )
    console.log(setFormType)
  }
  return (
    <div className={"login-register-form"}>
      {formType === "register" ? (
        <RegisterPage onClick={toggleFormTyp} />
      ) : (
        <LoginPage onClick={toggleFormTyp} />
      )}
    </div>
  )
}

export default Login
