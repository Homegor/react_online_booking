import React from "react"
import { useSelector } from "react-redux"
import { getServicesList } from "../../../../store/slices/servicesSlice"

const FilterHaircut = () => {
  const services = useSelector(getServicesList())

  const filterHaircut = services.filter(
    (x) => x.category === "6517dc564e155654cfe4f418"
  )
  return (
    <>
      {filterHaircut.map((h) => (
        <div key={h._id} id='haircut' className='name name__active'>
          <div className='name__box'>
            <div className='name__left'>
              <p className='name__title'>{h.name}</p>
            </div>
            <div className='name__right'>
              <p className='name__price'>{h.prise} &#x20bd;</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default FilterHaircut
