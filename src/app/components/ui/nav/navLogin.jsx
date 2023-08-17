import React from "react"
import { Link } from "react-router-dom"

const NavLogin = () => {
  const isAdmin = false

  return (
    <ul className='list-group user-room__Navbar list-group-flush'>
      <li>
        {isAdmin ? (
          <Link className='menu__item user-room__menu-item ' to={"/"}>
            Все пользователи
          </Link>
        ) : (
          <Link className='menu__item user-room__menu-item ' to={"/"}>
            Пользователь
          </Link>
        )}
      </li>
      <li>
        <Link className='menu__item user-room__menu-item' to={"/"}>
          Статистика
        </Link>
      </li>
      <li>
        <Link className='menu__item user-room__menu-item' to={"/"}>
          Записи
        </Link>
      </li>
      <li>
        <Link className='menu__item user-room__menu-item' to={"/"}>
          Настройки
        </Link>
      </li>
      <li>
        <Link className='menu__item user-room__menu-item' to={"/"}>
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
