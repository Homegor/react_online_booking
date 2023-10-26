import React, { useState } from "react"
import Modal from "../../modal"
import FastBookingForm from "../../../ui/form/bookingForm/fastBookingForm"
import PropTypes from "prop-types"

const ButtonBooking = ({ className }) => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      <button className={className} onClick={() => setModalActive(true)}>
        Записаться
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <FastBookingForm />
      </Modal>
    </>
  )
}

ButtonBooking.propTypes = {
  className: PropTypes.string
}

export default ButtonBooking
