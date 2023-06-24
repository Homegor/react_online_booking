import React from "react"

const Brands = () => {
  return (
    <section id={"brands"}>
      <div className='brands mw'>
        <p className='brands__text'>
          Бренды, которые мы используем в работе
        </p>
        <div className='brands__icon'>
          <div className='brands__img'>
            <img
              src='images/dest/wella.png'
              alt='wella'
              className='brands__photo'
            />
          </div>
          <div className='brands__img'>
            <img
              src='images/dest/schwarzkopf.png'
              alt='wella'
              className='brands__photo'
            />
          </div>
          <div className='brands__img'>
            <img
              src='images/dest/tigi.png'
              alt='wella'
              className='brands__photo'
            />
          </div>
          <div className='brands__img'>
            <img
              src='images/dest/londa.png'
              alt='wella'
              className='brands__photo'
            />
          </div>
          <div className='brands__img'>
            <img
              src='images/dest/nioxin.png'
              alt='wella'
              className='brands__photo'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
