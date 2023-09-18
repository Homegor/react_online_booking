import React from "react"

import wella from "../../style/images/wella.png"
import schwarzkopf from "../../style/images/schwarzkopf.png"
import tigi from "../../style/images/tigi.png"
import londa from "../../style/images/londa.png"
import nioxin from "../../style/images/nioxin.png"

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
