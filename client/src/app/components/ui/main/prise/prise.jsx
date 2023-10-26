import React from "react"
import { PriseList } from "../../../common/prise"

const Prise = () => {
  return (
    <section>
      <div className='price mw'>
        <div className='price__information'>
          <p className='price__title title'>Услуги и цены</p>
        </div>
        <PriseList />
      </div>
    </section>
  )
}

export default Prise
