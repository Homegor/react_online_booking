import React from "react"

const EditBookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <h1>Редактировать запись</h1>
      <form onSubmit={handleSubmit}></form>
    </>
  )
}

export default EditBookingForm
