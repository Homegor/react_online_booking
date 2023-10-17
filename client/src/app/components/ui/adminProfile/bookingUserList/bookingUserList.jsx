import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getBookingList,
  removeBooking
} from "../../../../store/slices/bookingSlice"
import Loader from "../../../common/loader/loader"

const BookingUserList = () => {
  const bookingStatus = useSelector(getBookingList())
  const dispatch = useDispatch()

  const handleRemoveBooking = (id) => {
    dispatch(removeBooking(id))
    console.log(id)
  }
  const callForClarification = () => {
    return <span className={"booking__danger"}>Требует уточнения</span>
  }
  return (
    <div>
      <h2>Записи</h2>
      {bookingStatus ? (
        <div className='booking'>
          {bookingStatus.map((b) => (
            <div key={b._id} className='booking__info'>
              <p>
                Имя: <span className={"booking__userInfo"}>{b.name}</span>
              </p>
              <p>
                Телефон: <span className={"booking__userInfo"}>{b.phone}</span>
              </p>
              <p>
                Услуга:
                <span className={"booking__userInfo"}>
                  {b.servicesId === "" ? callForClarification() : b.servicesId}
                </span>
              </p>
              <p>
                Мастер:
                <span className={"booking__userInfo"}>
                  {b.mastersId === "" ? callForClarification() : b.mastersId}
                </span>
              </p>
              <p>
                Дата визита:
                <span className={"booking__userInfo"}>
                  {b.visitDateId === ""
                    ? callForClarification()
                    : b.visitDateId}
                </span>
              </p>
              <div className='booking__click'>
                <button
                  onClick={() => handleRemoveBooking(b._id)}
                  className={"btn booking__btn mt-3"}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default BookingUserList
