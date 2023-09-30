import React, { useState } from "react"
import TextField from "../../../common/form/textField"
import { CheckBoxField } from "../../../common/form/checkBox"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  getAuthErrors,
  getCurrentUserData,
  signIn
} from "../../../../store/slices/userSlice"

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "", stayOn: false })
  const navigate = useNavigate()
  const loginError = useSelector(getAuthErrors())
  const dispatch = useDispatch()
  const currentUser = useSelector(getCurrentUserData())

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signIn({ payload: data }))
    navigate(`/userPage/${currentUser}/about`)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-outline mb-4'>
          <TextField
            type={"email"}
            name={"email"}
            label={"Электронная почта"}
            onChange={handleChange}
            value={data.email}
          />
        </div>

        <div className='form-outline mb-4'>
          <TextField
            label={"Пароль"}
            type={"password"}
            name={"password"}
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <div className='row m-4'>
          <div className='col-md-6 d-flex justify-content-center'>
            <div className='form-check mb-3 mb-md-0'>
              <CheckBoxField
                value={data.stayOn}
                onChange={handleChange}
                name={"stayOn"}
              >
                Оставаться в системе
              </CheckBoxField>
            </div>
            {loginError && <p className='text-danger'>{loginError}</p>}
          </div>

          <div className='col-md-6 d-flex justify-content-center'>
            <a href='#'>Восстановить доступ</a>
          </div>
        </div>

        <button type='submit' className='btn login-register-form__btn mb-3'>
          Войти
        </button>
      </form>
    </>
  )
}

export default LoginForm
