import React from "react"
import TextField from "../components/common/form/textField"
import ButtonsBooking from "../components/common/form/buttonsBooking"

const FormBooking = () => {
  const handleChange = (target) => {
    console.log("target", target)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("e", e)
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
        type={"text"}
        onChange={handleChange}
      />
      <TextField
        label={"Телефон"}
        name={"phone"}
        type={"tel"}
        onChange={handleChange}
      />
      <ButtonsBooking
        className={"form__button"}
        onClick={handleChange}
        name={"Записаться"}
      />
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
