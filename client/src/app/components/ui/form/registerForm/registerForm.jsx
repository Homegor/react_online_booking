import React, { useEffect, useState } from "react"
import TextField from "../../../common/form/textField"
import { validator } from "../../../../utils/validator"
import validConfig from "./validConfig"
import RadioField from "../../../common/form/radio"
import CheckBoxField from "../../../common/form/checkBox"
// import { useHistory } from "react-router-dom"

const RegisterForm = () => {
  // const history = useHistory()
  const [errors, setErrors] = useState({})
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    date: "",
    sex: "",
    licence: false
  })

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0
  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    try {
      // history.push("/")
    } catch (error) {
      setErrors(error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label={"Фамилия Имя"}
        type={"text"}
        name={"name"}
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        type={"email"}
        name={"email"}
        label={"Электронная почта"}
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        type={"tel"}
        name={"phone"}
        value={data.phone}
        onChange={handleChange}
        error={errors.phone}
        label={"Номер телефона"}
      />
      <RadioField
        options={[
          { name: "Женский", value: "male" },
          { name: "Мужской", value: "female" }
        ]}
        value={data.sex}
        name={"sex"}
        label={"Выберете ваши пол"}
        onChange={handleChange}
        error={errors.sex}
      />
      <TextField
        label={"Пароль"}
        type={"password"}
        name={"password"}
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <div className='form-check d-flex justify-content-center mb-4'>
        <CheckBoxField
          value={data.licence}
          onChange={handleChange}
          name={"licence"}
        >
          Я прочитал и согласен с условиями
        </CheckBoxField>
      </div>
      <button
        type='submit'
        disabled={!isValid}
        className='btn login-register-form__btn mb-3'
      >
        Зарегистрироваться
      </button>
    </form>
  )
}

export default RegisterForm