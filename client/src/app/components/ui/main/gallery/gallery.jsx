import React from "react"

import img1 from "../../../../assets/img/img1.png"
import img2 from "../../../../assets/img/img2.png"
import img3 from "../../../../assets/img/img3.png"
import img4 from "../../../../assets/img/img4.png"

const Gallery = () => {
  return (
    <section>
      <div className='gallery gallery__work'>
        <div className='gallery__container mw'>
          <h1 className='gallery__title title'>Наши работы</h1>
        </div>
        <div className='swiper gallery__gallery'>
          <div className='gallery__img'>
            <div className='gallery__blackout'>
              <img className='gallery__photo' src={img1} alt='video' />
            </div>
          </div>
          <div className='gallery__img'>
            <div className='gallery__blackout'>
              <img className='gallery__photo' src={img2} alt='video' />
            </div>
          </div>
          <div className='gallery__img'>
            <div className='gallery__blackout'>
              <img className='gallery__photo' src={img3} alt='video' />
            </div>
          </div>
          <div className='gallery__img'>
            <div className='gallery__blackout'>
              <img className='gallery__photo' src={img4} alt='video' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
