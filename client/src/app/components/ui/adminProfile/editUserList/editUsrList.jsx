import React, { useEffect, useState } from "react"
import TextField from "../../../common/form/textField"
import {
  getCurrentUserData,
  updateUser
} from "../../../../store/slices/userSlice"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../../../common/loader/loader"

const EditUsrList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()
  const currentUser = useSelector(getCurrentUserData())
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentUser && !data) {
      setData({
        ...currentUser
      })
    }
  }, [currentUser, data])
  useEffect(() => {
    if (data && isLoading) {
      setIsLoading(false)
    }
  }, [data])

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(
      updateUser({
        ...data
      })
    )
  }
  return (
    <>
      <h2>Редактирование</h2>
      {!isLoading ? (
        <form onSubmit={handleSubmit}>
          <TextField
            label={"Фамилия Имя"}
            type={"text"}
            name={"name"}
            value={data.name}
            onChange={handleChange}
          />
          <TextField
            type={"email"}
            name={"email"}
            label={"Электронная почта"}
            value={data.email}
            onChange={handleChange}
          />
          <TextField
            type={"text"}
            name={"phone"}
            value={data.phone}
            onChange={handleChange}
            label={"Номер телефона"}
          />
          <button type='submit' className='btn login-register-form__btn mb-3'>
            Редактировать
          </button>
        </form>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default EditUsrList
