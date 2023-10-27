import React, { useEffect, useState } from "react"
import TextField from "../../../common/form/textField"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import validConfig from "../registerForm/validConfig"
import {
  getAuthErrors,
  getCurrentUserData,
  signIn
} from "../../../../store/slices/userSlice"
import { validator } from "../../../../utils/validator"
import { createMemoryHistory } from "history"

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const loginError = useSelector(getAuthErrors())
  const dispatch = useDispatch()
  const currentUser = useSelector(getCurrentUserData())
  const history = createMemoryHistory()

  const validate = () => {
    const errors = validator(data, validConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  useEffect(() => {
    validate()
  }, [data])

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    const redirect = history.location.state
      ? history.location.state.referrer.pathname
      : navigate(`/userPage/${currentUser}/about`)
    dispatch(signIn({ payload: data, redirect }))
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
            error={errors.email}
          />
        </div>

        <div className='form-outline mb-4'>
          <TextField
            label={"Пароль"}
            type={"password"}
            name={"password"}
            value={data.password}
            onChange={handleChange}
            error={errors.password}
          />
        </div>

        <div className='row m-4'>
          <div className='col-md-6 d-flex justify-content-center'>
            {loginError && <p className='text-danger'>{loginError}</p>}
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
