import React, { useState } from "react"
import PropTypes from "prop-types"
import FastBookingForm from "../../ui/form/bookingForm/fastBookingForm"

const Modal = ({ children, visible, setVisible }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const toggleModal = () => {
    setIsOpenModal((prevState) => !prevState)
  }

  return (
    <div
      className={"modal " + (isOpenModal === true ? "active" : "")}
      onClick={toggleModal}
    >
      <div className={"modalContent"} onClick={(e) => e.stopPropagation()}>
        <FastBookingForm />
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.object,
  visible: PropTypes.func,
  setVisible: PropTypes.func
}

export default Modal
