import React from "react"

import girl1 from "../../style/images/girl_1.png"
import girl2 from "../../style/images/girl_2.png"
import girl3 from "../../style/images/girl_3.png"
import girl4 from "../../style/images/girl_4.png"

const Masters = () => {
  return (
    <div className='masters'>
      <div className='master__container'>
        <div className='masters__header'>
          <p className='masters__title title'>Мастера</p>
          <p className='masters__subtitle'>
            Дружная команда настоящих профессионалов
          </p>
        </div>
        <div className='masters__info'>
          <div className='masters__container'>
            <div className='masters__box'>
              <img className='masters__img' src={girl1} alt='alt' />
              <a
                className='masters__link link'
                href='#'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                Записаться <br /> к мастеру
              </a>
            </div>
            <div className='masters__name'>
              <p className='masters__fest-name'>Краснова Ирина</p>
              <p className='masters__specialties'>Мастер ногтевого сервиса</p>
              <p className='masters__experience'>опыт работы 5 лет</p>
            </div>
          </div>
          <div className='masters__container'>
            <div className='masters__box'>
              <img className='masters__img' src={girl2} alt='alt' />
              <a
                className='masters__link link'
                href='#'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                Записаться <br /> к мастеру
              </a>
            </div>
            <div className='masters__name'>
              <p className='masters__fest-name'>Калилова Жанна</p>
              <p className='masters__specialties'>Визажист-стилист</p>
              <p className='masters__experience'>опыт работы 5 лет</p>
            </div>
          </div>
          <div className='masters__container'>
            <div className='masters__box'>
              <img className='masters__img' src={girl3} alt='alt' />
              <a
                className='masters__link link'
                href='#'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                Записаться <br /> к мастеру
              </a>
            </div>
            <div className='masters__name'>
              <p className='masters__fest-name'>Киселева Алина</p>
              <p className='masters__specialties'>Парикмахер</p>
              <p className='masters__experience'>опыт работы 5 лет</p>
            </div>
          </div>
          <div className='masters__container'>
            <div className='masters__box'>
              <img className='masters__img' src={girl4} alt='alt' />
              <a
                className='masters__link link'
                href='#'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                Записаться <br /> к мастеру
              </a>
            </div>
            <div className='masters__name'>
              <p className='masters__fest-name'>Иванова Елена</p>
              <p className='masters__specialties'>Мастер ногтевого сервиса</p>
              <p className='masters__experience'>опыт работы 5 лет</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Masters
