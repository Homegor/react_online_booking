import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getBookingList,
  getBookingLoadingStatus,
  removeBooking
} from "../../../../store/slices/bookingSlice"
import Loader from "../../../common/loader/loader"
import { getCurrentUserId } from "../../../../store/slices/userSlice"

const BookingUserList = () => {
  const bookingList = useSelector(getBookingList())
  const dispatch = useDispatch()
  const isLoading = useSelector(getBookingLoadingStatus())
  const user = useSelector(getCurrentUserId())

  const handleRemoveBooking = (id) => {
    dispatch(removeBooking(id))
  }

  return (
    <div>
      <h2>Записи</h2>
      {!isLoading ? (
        <div className='booking'>
          {bookingList.map((b) => (
            <div key={b._id}>
              {b.userId === user && (
                <div className={"booking__info"}>
                  <p>
                    Имя: <span className={"booking__userInfo"}>{b.name}</span>
                  </p>
                  <p>
                    Телефон:
                    <span className={"booking__userInfo"}>{b.phone}</span>
                  </p>
                  <p>
                    Услуга:
                    <span className={"booking__userInfo"}>{b.services}</span>
                  </p>
                  <p>
                    Мастер:
                    <span className={"booking__userInfo"}>{b.masters}</span>
                  </p>
                  <p>
                    Дата визита:
                    <span className={"booking__userInfo"}>{b.visitDate}</span>
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
              )}
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
