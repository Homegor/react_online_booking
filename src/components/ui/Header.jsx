import React from "react"
import NavBar from "./NavBar"

const Header = () => {
  return (
    <>
      <header>
        <div className='containers mw'>
          <div className='menu'>
            <div className='menu__logo'>
              <div className='logo'>
                <a href='#'>Мир красоты</a>
              </div>
              <div className='menu-btn'>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <NavBar />
            <div className='information'>
              <a
                className='information__phone'
                href='tel:+74996861762'
              >
                8 (499) 686-17-62
              </a>
              <p className='information__time'>
                с 10:00 до 19:00 без выходных
              </p>
            </div>
          </div>
          <div className='hero'>
            <div className='hero__content'>
              <h1 className='hero__title'>
                Создай свой образ <br /> вместе с нами
              </h1>
              <p className='hero__subtitle'>
                Идеальный образ за 60 минут
              </p>
              <button
                className='hero__btn btn'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                Записаться онлайн
              </button>
            </div>
            <div className='hero__media'>
              <img
                className='hero__girl'
                src='#'
                alt='фото'
              />
            </div>
            <div className='hero__social'>
              <ul>
                <li>
                  <a href='#'>
                    <img src='#' alt='VK' />
                  </a>
                </li>
                <li className='hero__social-center'>
                  <a href='#'>
                    <img src='#' alt='Inst' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src='#' alt='YT' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
