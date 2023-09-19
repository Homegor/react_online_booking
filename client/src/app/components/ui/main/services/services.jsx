import React from "react"

import nail from "../../../../assets/img/nail.png"

const Services = () => {
  return (
    <>
      <section>
        <div className='services mw'>
          <div className='services__container'>
            <h1 className='services__title title'>Популярные услуги</h1>
          </div>
          <div className='services__task'>
            <div className='services__line'>
              <div className='services__box'>
                <div className='services__info info'>
                  <img className='services__img' src={nail} alt='маникюр' />
                  <h3 className='services__subtitle'>Маникюр</h3>
                  <p className='services__text'>
                    Аппаратный, комбинированный или классический.
                  </p>
                  <button
                    className='btn services__btn'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    Записаться
                  </button>
                </div>
                <div className='services__info info'>
                  <img className='services__img' src={nail} alt='маникюр' />
                  <h3 className='services__subtitle'>Покрытие гель-лак</h3>
                  <p className='services__text'>
                    Гель-лак наносится в несколько слоев с использованием базы и
                    топа. Каждый слой полимеризуется в LED-лампе.
                  </p>
                  <button
                    className='btn services__btn'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    Записаться
                  </button>
                </div>
                <div className='services__info info'>
                  <img className='services__img' src={nail} alt='маникюр' />
                  <h3 className='services__subtitle'>Бразильский маникюр</h3>
                  <p className='services__text'>
                    Выполняется в одноразовых перчатках наполненных увлажняющим
                    лосьоном.
                  </p>
                  <button
                    className='btn services__btn'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    Записаться
                  </button>
                </div>
              </div>
              <div className='services__box'>
                <div className='services__info info'>
                  <img className='services__img' src={nail} alt='маникюр' />
                  <h3 className='services__subtitle'>Маникюр</h3>
                  <p className='services__text'>
                    Аппаратный, комбинированный или классический.
                  </p>
                  <button
                    className='btn services__btn'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    Записаться
                  </button>
                </div>
                <div className='services__info info'>
                  <img className='services__img' src={nail} alt='маникюр' />
                  <h3 className='services__subtitle'>Парафинотерапия</h3>
                  <p className='services__text'>
                    Благодаря этой процедуре увлажнение кожи увеличивается на
                    80%, также выводит токсины и укрепляет суставы.
                  </p>
                  <button
                    className='btn services__btn'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    Записаться
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
