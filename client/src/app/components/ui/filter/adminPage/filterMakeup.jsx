import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getServicesList,
  removeServices
} from "../../../../store/slices/servicesSlice"

const FilterMakeup = () => {
  const services = useSelector(getServicesList())
  const dispatch = useDispatch()

  const handleRemoveBooking = (id) => {
    dispatch(removeServices(id))
  }
  const filterMakeup = services.filter(
    (s) => s.category === "6517dc564e155654cfe4f41b"
  )
  return (
    <>
      {filterMakeup.map((h) => (
        <div key={h._id} className={"booking__info"}>
          <p>
            Название:
            <span className={"booking__userInfo"}>{h.name}</span>
          </p>
          <p>
            Цена:
            <span className={"booking__userInfo"}>{h.prise} &#x20bd;</span>
          </p>
          <div className='booking__click'>
            <button
              onClick={() => handleRemoveBooking(h._id)}
              className={"btn booking__btn mt-3"}
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default FilterMakeup
