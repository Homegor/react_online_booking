import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getServicesList,
  removeServices
} from "../../../../store/slices/servicesSlice"

const FilterCosmetology = () => {
  const services = useSelector(getServicesList())
  const dispatch = useDispatch()

  const filterCosmetology = services.filter(
    (h) => h.category === "6517dc564e155654cfe4f419"
  )

  const handleRemoveBooking = (id) => {
    dispatch(removeServices(id))
  }
  return (
    <>
      {filterCosmetology.map((h) => (
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

export default FilterCosmetology
