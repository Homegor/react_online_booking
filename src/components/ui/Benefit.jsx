import React from "react"

const Benefit = () => {
  return (
    <section id={"benefit"}>
      <div className='benefit mw fr-11'>
        <div className='benefit__icon'>
          <div className='benefit__img'>
            <img src='images/dest/one.png' alt='иконка' />
          </div>
          <h3 className='benefit__title'>
            Удобные кабинеты
          </h3>
          <p className='benefit__subtitle'>
            Комфорт и стиль - принцип создания <br />{" "}
            кабинетов салона красоты.
            <br /> Только эстетика и удобство для Вас
          </p>
        </div>
        <div className='benefit__icon'>
          <div className='benefit__img'>
            <img src='images/dest/two.png' alt='иконка' />
          </div>
          <h3 className='benefit__title'>
            Качественная косметика
          </h3>
          <p className='benefit__subtitle'>
            Используем профессиональные <br /> материалы
            высшего качества <br /> лучших брендов
          </p>
        </div>
        <div className='benefit__icon'>
          <div className='benefit__img'>
            <img src='images/dest/three.png' alt='иконка' />
          </div>
          <h3 className='benefit__title'>
            Опытные мастера
          </h3>
          <p className='benefit__subtitle'>
            Работают только опытные мастера <br /> с
            чувством стиля. Смотрите наших <br />{" "}
            специалистов в разделе Мастера
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefit
