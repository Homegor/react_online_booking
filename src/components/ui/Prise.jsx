import React from "react"

const Prise = () => {
  return (
    <section id='price'>
      <div className='price mw'>
        <div className='price__information'>
          <p className='price__title title'>
            Услуги и цены
          </p>
        </div>
        <div id='myTabs' className='tabs'>
          <nav className='tabs__navigation'>
            <ul className='tabs__container'>
              <li
                className='tabs__link active'
                onClick="openTab(event, 'haircut')"
              >
                Стрижка и укладка
              </li>
              <li
                className='tabs__link'
                onClick="openTab(event, 'cosmetology')"
              >
                Косметология
              </li>
              <li
                className='tabs__link'
                onClick="openTab(event, 'nail')"
              >
                Маникюр и педикюр
              </li>
              <li
                className='tabs__link'
                onClick="openTab(event, 'makeup')"
              >
                Макияж
              </li>
              <li
                className='tabs__link'
                onClick="openTab(event, 'brows')"
              >
                Брови и ресницы
              </li>
              <li
                className='tabs__link'
                onClick="openTab(event, 'massage')"
              >
                Массаж
              </li>
            </ul>
          </nav>
          <div id='haircut' className='name name__active'>
            <div className='name__box'>
              <div className='name__left'>
                <p className='name__title'>
                  Женская стрижка
                </p>
                <p className='name__subtitle'>
                  Короткие волосы
                </p>
              </div>
              <div className='name__right'>
                <p className='name__price'>1200 &#x20bd;</p>
              </div>
            </div>
            <div className='name__box'>
              <div className='name__left'>
                <p className='name__title'>
                  Стрижка бороды и усов
                </p>
                <p className='name__subtitle'>
                  Короткие волосы
                </p>
              </div>
              <div className='name__right'>
                <p className='name__price'>1200 &#x20bd;</p>
              </div>
            </div>
            <div className='name__box'>
              <div className='name__left'>
                <p className='name__title'>
                  Мужская стрижка
                </p>
                <p className='name__subtitle'>
                  Короткие волосы
                </p>
              </div>
              <div className='name__right'>
                <p className='name__price'>1200 &#x20bd;</p>
              </div>
            </div>
            <div className='name__box'>
              <div className='name__left'>
                <p className='name__title'>
                  Экспресс укладка
                </p>
                <p className='name__subtitle'>
                  Короткие волосы
                </p>
              </div>
              <div className='name__right'>
                <p className='name__price'>1200 &#x20bd;</p>
              </div>
            </div>
            <div className='name__box'>
              <div className='name__left'>
                <p className='name__title'>Детский Стиль</p>
                <p className='name__subtitle'>
                  Короткие волосы
                </p>
              </div>
              <div className='name__right'>
                <p className='name__price'>1200 &#x20bd;</p>
              </div>
            </div>
            <div className='name__box'>
              <div className='name__left'>
                <p className='name__title'>
                  Укладка дневная
                </p>
                <p className='name__subtitle'>
                  Короткие волосы
                </p>
              </div>
              <div className='name__right'>
                <p className='name__price'>1200 &#x20bd;</p>
              </div>
            </div>
            <div className='name__box'>
              <div className='name__left'>
                <p className='name__title'>
                  Креативный Стиль
                </p>
                <p className='name__subtitle'>
                  Короткие волосы
                </p>
              </div>
              <div className='name__right'>
                <p className='name__price'>1200 &#x20bd;</p>
              </div>
            </div>
            <div className='name__box'>
              <div className='name__left'>
                <p className='name__title'>
                  Прическа вечерняя (свадебная)
                </p>
                <p className='name__subtitle'>
                  Короткие волосы
                </p>
              </div>
              <div className='name__right'>
                <p className='name__price'>3000 &#x20bd;</p>
              </div>
            </div>
          </div>
          <div id='cosmetology' className='name '>
            <div className='name__box'>
              <div className='name__left'>
                <p className='name__title'>
                  Женская стрижка
                </p>
                <p className='name__subtitle'>
                  Короткие волосы
                </p>
              </div>
              <div className='name__right'>
                <p className='name__price'>1200 &#x20bd;</p>
              </div>
            </div>
          </div>
          <div id='nail' className='name '>
            <div className='name__box'>
              <div className='name__left'>
                <p className='name__title'>
                  Стрижка бороды и усов
                </p>
                <p className='name__subtitle'>
                  Короткие волосы
                </p>
              </div>
              <div className='name__right'>
                <p className='name__price'>1200 &#x20bd;</p>
              </div>
            </div>
          </div>
          <div id='makeup' className='name '>
            <div className='name__box'>
              <div className='name__left'>
                <p className='name__title'>
                  Женская стрижка
                </p>
                <p className='name__subtitle'>
                  Короткие волосы
                </p>
              </div>
              <div className='name__right'>
                <p className='name__price'>1200 &#x20bd;</p>
              </div>
            </div>
          </div>
          <div id='brows' className='name '>
            <div className='name__box'>
              <div className='name__left'>
                <p className='name__title'>
                  Женская стрижка
                </p>
                <p className='name__subtitle'>
                  Короткие волосы
                </p>
              </div>
              <div className='name__right'>
                <p className='name__price'>1200 &#x20bd;</p>
              </div>
            </div>
          </div>
          <div id='massage' className='name '>
            <div className='name__box'>
              <div className='name__left'>
                <p className='name__title'>
                  Креативный Стиль
                </p>
                <p className='name__subtitle'>
                  Короткие волосы
                </p>
              </div>
              <div className='name__right'>
                <p className='name__price'>1200 &#x20bd;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Prise
