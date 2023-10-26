import React, { useEffect, useState } from "react"
import { validator } from "../../../../../utils/validator"
import validatorConfig from "./validConfig"
import TextField from "../../../../common/form/textField"
import { useDispatch, useSelector } from "react-redux"
import { createBooking } from "../../../../../store/slices/bookingSlice"
import Modal from "../../../../common/modal"
import { getIsLoggedIn } from "../../../../../store/slices/userSlice"

const FastBookingForm = () => {
  const [data, setData] = useState({ name: "", phone: "+7" })
  const [errors, setErrors] = useState({})
  const [modalActive, setModalActive] = useState(false)
  const dispatch = useDispatch()
  const isLogin = useSelector(getIsLoggedIn())

  useEffect(() => {
    validate()
  }, [data])
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  const clearForm = () => {
    setData({ name: "", phone: "+7" })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = {
      ...data
    }
    dispatch(createBooking({ ...newData }))
    clearForm()
    setModalActive(true)
  }

  return (
    <>
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
          value={data.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        {!isLogin ? (
          <p className={"text-center"}>
            Пожалуйста зарегистрируйтесь для записи
          </p>
        ) : (
          <button
            type={"submit"}
            className={"btn form__button"}
            name={"Записаться"}
          >
            Записаться
          </button>
        )}

        <p className='form__politic'>
          Нажимая на кнопку вы соглашаетесь с<br />
          <a className='form__politic-text politic' href='#' target='_blank'>
            обработкой персональных данных
          </a>
        </p>
      </form>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>
          Спасибо за запись. С вами свяжутся для уточнения даты и времени в
          течении 15 минут!
        </p>
      </Modal>
    </>
  )
}

export default FastBookingForm
