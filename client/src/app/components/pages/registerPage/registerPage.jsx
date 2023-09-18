import React from "react"
import RegisterForm from "../../ui/form/registerForm"
import { Link } from "react-router-dom"

const RegisterPage = () => {
  return (
    <>
      <h2 className={"p-4"}>Регистрация</h2>
      <RegisterForm />
      <div className='text-center'>
        <p>
          Уже есть аккаунт?
          <Link role={"button"} to={"/login"} className={"text-danger"}>
            <br />
            Войти
          </Link>
        </p>
      </div>
    </>
  )
}

export default RegisterPage
