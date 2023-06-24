import React from "react"

const Masters = () => {
  return (
    <section id='masters'>
      <div className='masters full'>
        <div className='master__container mw'>
          <div className='masters__header'>
            <p className='masters__title title'>Мастера</p>
            <p className='masters__subtitle'>
              Дружная команда настоящих профессионалов
            </p>
          </div>
          <div className='masters__info'>
            <div className='masters__container'>
              <div className='masters__box'>
                <img
                  className='masters__img'
                  src='images/dest/girl_1.png'
                  alt='alt'
                />
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
                <p className='masters__fest-name'>
                  Краснова Ирина
                </p>
                <p className='masters__specialties'>
                  Мастер ногтевого сервиса
                </p>
                <p className='masters__experience'>
                  опыт работы 5 лет
                </p>
              </div>
            </div>
            <div className='masters__container'>
              <div className='masters__box'>
                <img
                  className='masters__img'
                  src='images/dest/girl_2.png'
                  alt='alt'
                />
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
                <p className='masters__fest-name'>
                  Калилова Жанна
                </p>
                <p className='masters__specialties'>
                  Визажист-стилист
                </p>
                <p className='masters__experience'>
                  опыт работы 5 лет
                </p>
              </div>
            </div>
            <div className='masters__container'>
              <div className='masters__box'>
                <img
                  className='masters__img'
                  src='images/dest/girl_3.png'
                  alt='alt'
                />
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
                <p className='masters__fest-name'>
                  Киселева Алина
                </p>
                <p className='masters__specialties'>
                  Парикмахер
                </p>
                <p className='masters__experience'>
                  опыт работы 5 лет
                </p>
              </div>
            </div>
            <div className='masters__container'>
              <div className='masters__box'>
                <img
                  className='masters__img'
                  src='images/dest/girl_4.png'
                  alt='alt'
                />
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
                <p className='masters__fest-name'>
                  Иванова Елена
                </p>
                <p className='masters__specialties'>
                  Мастер ногтевого сервиса
                </p>
                <p className='masters__experience'>
                  опыт работы 5 лет
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Masters
