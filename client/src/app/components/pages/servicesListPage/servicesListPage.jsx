import React from "react"
import Button from "../../common/form/button"
import {
  MastersBookingForm,
  ServicesBookingForm,
  UserListBookingForm
} from "../../ui/form/bookingForm/fullBookingForm"

const ServicesListPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <ServicesBookingForm />
        <MastersBookingForm />
        <UserListBookingForm />
        <hr />
        <div className={"d-flex justify-content-end"}>
          <Button name={"Записаться"} className={"hero__btn btn m-0"} />
        </div>
      </form>
    </section>
  )
}

export default ServicesListPage
