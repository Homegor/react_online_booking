import React, { useState } from "react"
import FastBookingForm from "../../ui/form/bookingForm/fastBookingForm"

const Modal = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleModal = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <div
      className={"modal " + (isOpen === true ? "active" : "")}
      onClick={toggleModal}
    >
      <div className={"modalContent"} onClick={(e) => e.stopPropagation()}>
        <FastBookingForm />
      </div>
    </div>
  )
}

export default Modal
