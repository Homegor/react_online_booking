import React from "react"

import wella from "../../../../assets/img/wella.png"
import schwarzkopf from "../../../../assets/img/schwarzkopf.png"
import tigi from "../../../../assets/img/tigi.png"
import londa from "../../../../assets/img/londa.png"
import nioxin from "../../../../assets/img/nioxin.png"

const Brands = () => {
  return (
    <div className='brands mw'>
      <p className='brands__text'>Бренды, которые мы используем в работе</p>
      <div className='brands__icon'>
        <div className='brands__img'>
          <img src={wella} alt='wella' className='brands__photo' />
        </div>
        <div className='brands__img'>
          <img src={schwarzkopf} alt='wella' className='brands__photo' />
        </div>
        <div className='brands__img'>
          <img src={tigi} alt='wella' className='brands__photo' />
        </div>
        <div className='brands__img'>
          <img src={londa} alt='wella' className='brands__photo' />
        </div>
        <div className='brands__img'>
          <img src={nioxin} alt='wella' className='brands__photo' />
        </div>
      </div>
    </div>
  )
}

export default Brands
