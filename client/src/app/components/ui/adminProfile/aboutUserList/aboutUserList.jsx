import React from "react"
import PropTypes from "prop-types"
import Button from "../../../common/form/button"

const AboutUserList = ({ user }) => {
  return (
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
      <div className={"d-flex justify-content-end"}>
        <Button className={"btn m-2"} name={"Редактировать данные"} />
      </div>
    </div>
  )
}

AboutUserList.propTypes = {
  user: PropTypes.object
}

export default AboutUserList
