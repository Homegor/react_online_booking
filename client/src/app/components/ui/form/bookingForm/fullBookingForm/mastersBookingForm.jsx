import React, { useState } from "react"
import { CheckBoxServices } from "../../../../common/form/checkBox"
import girl1 from "../../../../../assets/img/girl_1.png"
import girl2 from "../../../../../assets/img/girl_2.png"
import girl3 from "../../../../../assets/img/girl_3.png"
import girl4 from "../../../../../assets/img/girl_4.png"
// import PropTypes from "prop-types"

const MastersBookingForm = () => {
  const [master, setMaster] = useState({
    ki: false,
    kj: false,
    ka: false,
    ie: false
  })
  const handleChange = (target) => {
    setMaster((prevState) => ({ ...prevState, [target.name]: target.value }))
    console.log(target)
  }
  return (
    <>
      <hr />
      <h1>Наши Мастера</h1>
      <div className='fli d-flex flex-wrap justify-content-center'>
        <CheckBoxServices
          name={"ki"}
          id={"myCheckbox7"}
          htmlfor={"myCheckbox7"}
          src={girl1}
          value={master.ki}
          onChange={handleChange}
        >
          <p className={"mt-2"}>Краснова Ирина</p>
        </CheckBoxServices>
        <CheckBoxServices
          name={"kj"}
          id={"myCheckbox8"}
          htmlfor={"myCheckbox8"}
          src={girl2}
          value={master.kj}
          onChange={handleChange}
        >
          <p className={"mt-2"}>Калилова Жанна</p>
        </CheckBoxServices>
        <CheckBoxServices
          name={"ka"}
          id={"myCheckbox9"}
          htmlfor={"myCheckbox9"}
          src={girl3}
          value={master.ka}
          onChange={handleChange}
        >
          <p className={"mt-2"}>Киселева Алина</p>
        </CheckBoxServices>
        <CheckBoxServices
          name={"ie"}
          id={"myCheckbox10"}
          htmlfor={"myCheckbox10"}
          src={girl4}
          value={master.ie}
          onChange={handleChange}
        >
          <p className={"mt-2"}>Иванова Елена</p>
        </CheckBoxServices>
      </div>
    </>
  )
}

MastersBookingForm.propTypes = {}

export default MastersBookingForm
