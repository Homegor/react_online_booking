import React from "react"

import Social from "../../components/common/social"
import Sections from "../sections"
// import ButtonsBooking from "../../components/common/form/buttonsBooking"

import girl from "../../style/images/girl.png"

const TopHeader = () => {
  /*  const handleChange = (target) => {
    console.log(target)
  }*/
  return (
    <>
      <header>
        <div className='hero'>
          <div className='hero__content'>
            <p className='hero__title'>
              Создай свой образ <br /> вместе с нами
            </p>
            <p className='hero__subtitle'>Идеальный образ за 60 минут</p>
            <button
              className='hero__btn btn'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
            >
              Записаться онлайн
            </button>
            {/*            <ButtonsBooking
              onChange={handleChange}
              className={"hero__btn"}
              name={"Записаться онлайн"}
            />*/}
          </div>
          <div className='hero__media'>
            <img className='hero__girl' src={girl} alt='фото' />
          </div>
          <div className='hero__social'>
            <Social />
          </div>
        </div>
      </header>
      <Sections />
    </>
  )
}

export default TopHeader
