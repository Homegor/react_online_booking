import React, { useEffect, useState } from "react"
import { validator } from "../../../../utils/validator"
import validatorConfig from "./validConfig"
import TextField from "../../../common/form/textField"

const FormBooking = () => {
  const [data, setData] = useState({ name: "", phone: "+7" })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    validate()
  }, [data])
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
  }
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
    console.log("target", target)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object(errors).length !== 0) return
    console.log("e", data)
    console.log("hi")
  }

  return (
    <form className='form__action' onSubmit={handleSubmit}>
      <div className='form__text'>
        <p className='form__title'>Быстрая запись</p>
        <p className='form__subtitle'>
          Наш менеджер перезвонит в течение нескольких
          <br /> минут, уточнит подробности и согласует время.
        </p>
      </div>
      <TextField
        label={"Имя"}
        name={"name"}
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        label={"Телефон"}
        name={"phone"}
        type={"tel"}
        value={data.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <button
        type={"submit"}
        className={"btn form__button"}
        name={"Записаться"}
      >
        Записаться
      </button>
      <p className='form__politic'>
        Нажимая на кнопку вы соглашаетесь с<br />
        <a className='form__politic-text politic' href='#' target='_blank'>
          обработкой персональных данных
        </a>
      </p>
    </form>
  )
}

export default FormBooking
