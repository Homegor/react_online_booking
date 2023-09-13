import React from "react"
import { Link } from "react-router-dom"

const NavLogin = () => {
  const isAdmin = false

  return (
    <ul className='list-group user-room__Navbar list-group-flush'>
      <li>
        {isAdmin ? (
          <Link className='menu__item user-room__menu-item ' to={"/userPage"}>
            Все пользователи
          </Link>
        ) : (
          <Link className='menu__item user-room__menu-item ' to={"/userPage"}>
            Пользователь
          </Link>
        )}
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={"/userPage/Static"}
        >
          Статистика
        </Link>
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={"/userPage/Booking"}
        >
          Записи
        </Link>
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={"/userList/Settings"}
        >
          Настройки
        </Link>
      </li>
      <li>
        <Link className='menu__item user-room__menu-item' to={"/userList/Edit"}>
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

export default NavLogin
