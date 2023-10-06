import React from "react"
import PropTypes from "prop-types"
import {
  getUsersList,
  getCurrentUserId
} from "../../../../store/slices/userSlice"
import { useSelector } from "react-redux"

const AboutUserList = () => {
  const user = useSelector(getUsersList())
  console.log("user", user)
  const currentUserId = useSelector(getCurrentUserId())
  console.log("currentUserId", currentUserId)

  return (
    <>
      <h2>О вас</h2>
      <div className='row user-info'>
        {/*      <div className='col-6 col-md-4 user-room__request text-center p-2'>
        <p>Фамилия/Имя</p>
      </div>
      <div className='col-12 col-md-8 user-room__info text-center p-2'>
        <p>{user.name}</p>
      </div>
      <div className='col-6 col-md-4 user-room__request text-center p-2'>
        <p>Пол</p>
      </div>
      <div className='col-12 col-md-8 text-center p-2'>
        <p>{user.sex}</p>
      </div>
      <div className='col-6 col-md-4 user-room__request text-center p-2'>
        <p>Номер телефона</p>
      </div>
      <div className='col-12 col-md-8 text-center p-2'>
        <p>{user.phone}</p>
      </div>*/}
      </div>
    </>
  )
}

AboutUserList.propTypes = {
  user: PropTypes.object
}

export default AboutUserList
