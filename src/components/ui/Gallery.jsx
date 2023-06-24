import React from "react"

const Gallery = () => {
  return (
    <section id='gallery'>
      <div className='gallery gallery__work'>
        <div className='gallery__container mw'>
          <h1 className='gallery__title title'>
            Наши работы
          </h1>
          <div className='gallery__slider'>
            <button className='gallery__prev'>←</button>
            <button className='gallery__next'>→</button>
          </div>
        </div>
        <div className='swiper gallery__gallery'>
          <div className='gallery__img'>
            <div className='gallery__blackout'>
              <img
                className='gallery__photo'
                src='images/dest/img1.png'
                alt='video'
              />
              <p className='gallery__link link'>
                <img
                  className='gallery__loop'
                  src='images/dest/loop.png'
                  alt='123'
                />
                Увеличить
              </p>
            </div>
          </div>
          <div className='gallery__img'>
            <div className='gallery__blackout'>
              <img
                className='gallery__photo'
                src='images/dest/img2.png'
                alt='video'
              />
              <p className='gallery__link link'>
                <img
                  className='gallery__loop'
                  src='images/dest/loop.png'
                  alt='123'
                />
                Увеличить
              </p>
            </div>
          </div>
          <div className='gallery__img'>
            <div className='gallery__blackout'>
              <img
                className='gallery__photo'
                src='images/dest/img3.png'
                alt='video'
              />
              <p className='gallery__link link'>
                <img
                  className='gallery__loop'
                  src='images/dest/loop.png'
                  alt='123'
                />
                Увеличить
              </p>
            </div>
          </div>
          <div className='gallery__img'>
            <div className='gallery__blackout'>
              <img
                className='gallery__photo'
                src='images/dest/img4.png'
                alt='video'
              />
              <p className='gallery__link link'>
                <img
                  className='gallery__loop'
                  src='images/dest/loop.png'
                  alt='123'
                />
                Увеличить
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
