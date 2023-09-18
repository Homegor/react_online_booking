import React, { useState } from "react"
import PropTypes from "prop-types"
import FormBooking from "../../../layouts/formBooking"

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
        <FormBooking />
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
