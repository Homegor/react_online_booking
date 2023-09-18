import React from "react"
import NavProfile from "./navProfile"
import { Link } from "react-router-dom"
import { ContactForUs } from "./index"

const NavBar = () => {
  return (
    <>
      <ul className='menu__box'>
        <div className='menu__logo'>
          <div className='logo'>
            <a href='#'>Мир красоты</a>
          </div>
        </div>
        <NavProfile />
        <li>
          <Link className={"menu__item"} to={"/"}>
            Главная
          </Link>
        </li>
        <li>
          <Link className={"menu__item"} to={"/services"}>
            Услуги
          </Link>
        </li>
        <li>
          <Link className={"menu__item"} to={"/comments"}>
            Ваши отзывы
          </Link>
        </li>
        <li>
          <Link className={"menu__item"} to={"/login"}>
            Вход/Регистрация
          </Link>
        </li>

        <ContactForUs />
      </ul>
    </>
  )
}

export default NavBar
