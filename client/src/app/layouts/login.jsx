import React, { useState } from "react"
import RegisterForm from "../components/ui/registerForm"
import LoginForm from "../components/ui/loginForm"
import { useParams } from "react-router-dom"

const Login = () => {
  const { type } = useParams()
  const [formType, setFormType] = useState(type === "register" ? type : "login")
  const toggleFormTyp = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    )
  }
  return (
    <div className={"login-register-form"}>
      {formType === "register" ? (
        <>
          <h2 className={"p-4"}>Регистрация</h2>
          <RegisterForm />
          <div className='text-center'>
            <p>
              Уже есть аккаунт?
              <a
                role={"button"}
                onClick={toggleFormTyp}
                className={"text-danger"}
              >
                <br />
                Войти
              </a>
            </p>
          </div>
        </>
      ) : (
        <>
          <h2 className={"p-4"}>Вход</h2>
          <LoginForm />
          <div className='text-center'>
            <p>
              Вы еще не зарегистрированы?
              <a
                role={"button"}
                onClick={toggleFormTyp}
                className={"text-danger"}
              >
                <br />
                Регистрация
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default Login
