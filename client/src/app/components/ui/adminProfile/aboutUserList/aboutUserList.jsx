import React from "react"
import { getCurrentUserData } from "../../../../store/slices/userSlice"
import { useSelector } from "react-redux"

const AboutUserList = () => {
  const currentUser = useSelector(getCurrentUserData())

  return (
    <>
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
      </div>
    </>
  )
}

export default AboutUserList
