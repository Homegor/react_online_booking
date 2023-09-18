import React from "react"
import { Link } from "react-router-dom"

const NavUserProfile = () => {
  const isAdmin = false

  return (
    <ul className='list-group user-room__Navbar list-group-flush'>
      <li>
        {!isAdmin ? (
          <Link
            className='menu__item user-room__menu-item '
            to={"/userPage/about"}
          >
            Все пользователи АДМИН
          </Link>
        ) : (
          <Link
            className='menu__item user-room__menu-item '
            to={"/userPage/about"}
          >
            Пользователь НЕ Админ
          </Link>
        )}
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={"/userPage/static"}
        >
          Статистика
        </Link>
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={"/userPage/booking"}
        >
          Записи
        </Link>
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={"/userPage/settings"}
        >
          Настройки
        </Link>
      </li>
      <li>
        <Link className='menu__item user-room__menu-item' to={"/userPage/edit"}>
          Редактировать
        </Link>
      </li>
      <li>
        <Link className='menu__item user-room__menu-item' to={"/"}>
          Выйти
        </Link>
      </li>
    </ul>
  )
}

export default NavUserProfile
