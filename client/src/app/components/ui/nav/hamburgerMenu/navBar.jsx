import React from "react"
import NavProfile from "./navProfile"
import { Link } from "react-router-dom"
import { ContactForUs } from "./index"
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "../../../../store/slices/userSlice"

const NavBar = () => {
  const isLogin = useSelector(getIsLoggedIn())

  return (
    <>
      <ul className='menu__boxx'>
        <NavProfile />
        <li>
          <Link className={"menu__item"} to={"/"}>
            Главная
          </Link>
        </li>
        {isLogin && (
          <li>
            <Link className={"menu__item"} to={"/booking"}>
              Записаться
            </Link>
          </li>
        )}
        <li>
          <Link className={"menu__item"} to={"/comments"}>
            Ваши отзывы
          </Link>
        </li>
        {!isLogin && (
          <li>
            <Link className={"menu__item"} to={"auth/login"}>
              Вход/Регистрация
            </Link>
          </li>
        )}
        <ContactForUs />
      </ul>
    </>
  )
}

export default NavBar
