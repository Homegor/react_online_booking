import React, { useState } from "react"
import TextField from "../../../../common/form/textField"
// import PropTypes from 'prop-types';

const UserListBookingForm = (props) => {
  const [data, setData] = useState({
    name: "",
    firstName: "",
    phone: "",
    date: ""
  })
  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  return (
    <>
      <hr />
      <h1>Информация о вас</h1>
      <div className={"d-flex flex-wrap justify-content-center"}>
        <div className={"div-input m-2"}>
          <TextField
            name={"name"}
            value={data.name}
            label={"Имя"}
            onChange={handleChange}
          />
        </div>
        <div className={"div-input m-2"}>
          <TextField
            name={"firstName"}
            value={data.firstName}
            label={"Фамилия"}
            onChange={handleChange}
          />
        </div>
        <div className={"div-input m-2"}>
          <TextField
            type={"phone"}
            name={"phone"}
            value={data.phone}
            label={"Телефон"}
            onChange={handleChange}
          />
        </div>
        <div className={"div-input m-2"}>
          <TextField
            name={"date"}
            label={"Дата"}
            value={data.date}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  )
}

UserListBookingForm.propTypes = {}

export default UserListBookingForm
