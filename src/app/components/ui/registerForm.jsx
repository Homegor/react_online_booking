import React, { useEffect, useState } from "react"
import TextField from "../common/form/textField"
import CheckBoxField from "../common/form/checkBoxField"
import RadioField from "../common/form/radioField"
import { validator } from "../../utils/validator"
import { useHistory } from "react-router-dom"

const RegisterForm = () => {
  const history = useHistory()
  const [errors, setErrors] = useState({})
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    date: "",
    sex: "",
    licence: false
  })

  const validatorConfig = {
    email: {
      isRequired: { message: "Электронная почта обязательна" },
      isEmail: {
        message: "Email введен некорректно"
      }
    },
    name: {
      isRequired: { message: "Имя обязательна" },
      minSymbol: {
        message: "Имя должно содержать не менее 3 символов",
        value: 3
      }
    },
    password: {
      isRequired: { message: "Пароль обязателен" },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву"
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одно число"
      },
      minSymbol: {
        message: "Пароль должен содержать не менее 8 символов",
        value: 8
      }
    },
    sex: {
      isRequired: {
        message: "Обязательно выберете свой пол"
      }
    },
    licence: {
      isRequired: {
        message:
          "Нажимая вы подтверждаете что ознакомились с лицензионным соглашением"
      }
    }
  }
  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
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
      history.push("/")
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
