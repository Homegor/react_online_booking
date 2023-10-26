import React from "react"

import one from "../../../../assets/img/one.png"
import two from "../../../../assets/img/two.png"
import three from "../../../../assets/img/three.png"

const Benefit = () => {
  return (
    <section>
      <div className='benefit mw fr-11'>
        <div className='benefit__icon'>
          <div className='benefit__img'>
            <img src={one} alt='Удобные кабинеты' />
          </div>
          <h3 className='benefit__title'>Удобные кабинеты</h3>
          <p className='benefit__subtitle'>
            Комфорт и стиль - принцип создания <br /> кабинетов салона красоты.
            <br /> Только эстетика и удобство для Вас
          </p>
        </div>
        <div className='benefit__icon'>
          <div className='benefit__img'>
            <img src={two} alt='Качественная косметика' />
          </div>
          <h3 className='benefit__title'>Качественная косметика</h3>
          <p className='benefit__subtitle'>
            Используем профессиональные <br /> материалы высшего качества <br />
            лучших брендов
          </p>
        </div>
        <div className='benefit__icon'>
          <div className='benefit__img'>
            <img src={three} alt='Опытные мастера' />
          </div>
          <h3 className='benefit__title'>Опытные мастера</h3>
          <p className='benefit__subtitle'>
            Работают только опытные мастера <br /> с чувством стиля. Смотрите
            наших <br /> специалистов в разделе Мастера
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefit
