import React, { useState } from "react"
import {
  getCurrentUserData,
  getUsersLoadingStatus
} from "../../../../store/slices/userSlice"
import { useSelector } from "react-redux"
import Modal from "../../../common/modal"
import EditUserForm from "../../form/editForm/editUserForm"
import { Button } from "../../../common/form/button"
import Loader from "../../../common/loader/loader"

const AboutUserList = () => {
  const currentUser = useSelector(getCurrentUserData())
  const [modalActive, setModalActive] = useState(false)
  const isLoading = useSelector(getUsersLoadingStatus())

  const handeClick = () => {
    setModalActive(true)
  }

  return (
    <>
      {!isLoading ? (
        <div className={"p-4"}>
          <h2>О вас</h2>
          <div className='row user-info'>
            <div className='col-6 col-md-4 user-room__request text-center'>
              <p>Имя / Фамилия</p>
            </div>
            <div className='col-12 col-md-8 user-room__info text-center'>
              <p>{currentUser.name}</p>
            </div>
            <hr />
            <div className='col-6 col-md-4 user-room__request text-center'>
              <p>Номер телефона</p>
            </div>
            <div className='col-12 col-md-8 text-center'>
              <p>{currentUser.phone}</p>
            </div>
            <hr />
            <div className='col-6 col-md-4 user-room__request text-center'>
              <p>Ваш Email</p>
            </div>
            <div className='col-12 col-md-8 text-center'>
              <p>{currentUser.email}</p>
            </div>
            <hr />
          </div>
          <Button
            className={"btn login-register-form__btn mb-3 float-end"}
            onClick={handeClick}
            name={"Редактировать"}
          ></Button>
        </div>
      ) : (
        <Loader />
      )}

      <Modal active={modalActive} setActive={setModalActive}>
        <EditUserForm />
      </Modal>
    </>
  )
}

export default AboutUserList
