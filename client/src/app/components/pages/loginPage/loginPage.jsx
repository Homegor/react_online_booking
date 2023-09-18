import React from "react"
import { Link } from "react-router-dom"
import LoginForm from "../../ui/form/loginForm"

const LoginPage = () => {
  return (
    <>
      <h2 className={"p-4"}>Вход</h2>
      <LoginForm />
      <div className='text-center'>
        <p>
          Вы еще не зарегистрированы?
          <Link role={"button"} to={"/register"} className={"text-danger"}>
            <br />
            Регистрация
          </Link>
        </p>
      </div>
    </>
  )
}

export default LoginPage
