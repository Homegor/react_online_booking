import React from "react"
import NavProfile from "./navProfile"
import { Link } from "react-router-dom"
import { ContactForUs } from "./index"
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "../../../../store/slices/userSlice"
import PropTypes from "prop-types"

const NavBar = ({ onClick }) => {
  const isLogin = useSelector(getIsLoggedIn())

  return (
    <>
      <ul className='menu__boxx'>
        <NavProfile onClick={onClick} />
        <li>
          <Link className={"menu__item"} onClick={onClick} to={"/"}>
            Главная
          </Link>
        </li>
        {isLogin && (
          <li>
            <Link className={"menu__item"} onClick={onClick} to={"/booking"}>
              Записаться
            </Link>
          </li>
        )}
        <li>
          <Link className={"menu__item"} to={"/comments"} onClick={onClick}>
            Ваши отзывы
          </Link>
        </li>
        {!isLogin && (
          <li>
            <Link className={"menu__item"} onClick={onClick} to={"auth/login"}>
              Вход/Регистрация
            </Link>
          </li>
        )}
        <ContactForUs />
      </ul>
    </>
  )
}

NavBar.propTypes = {
  onClick: PropTypes.bool
}

export default NavBar
