import React from "react"

import "../ui/style/navbar.scss"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <nav>
        <div className='navigation navigation-htmlForp'>
          <ul className='navigation__active'>
            <li>
              <Link
                className='navigation__link active'
                to='/price'
              >
                Услуги и цены
              </Link>
            </li>
            <li>
              <a
                className='navigation__link '
                htmlFor='#masters'
              >
                Мастера
              </a>
            </li>
            <li>
              <a
                className='navigation__link '
                htmlFor='#gallery'
              >
                Наши работы
              </a>
            </li>
            <li>
              <a
                className='navigation__link '
                htmlFor='#about'
              >
                О нас
              </a>
            </li>
            <li>
              <a
                className='navigation__link '
                htmlFor='#contact'
              >
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
