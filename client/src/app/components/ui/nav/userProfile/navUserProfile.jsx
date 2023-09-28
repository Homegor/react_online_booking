import React from "react"
import { Link, useParams } from "react-router-dom"

const NavUserProfile = () => {
  const { userId } = useParams()
  const isAdmin = false

  return (
    <ul className='list-group user-room__Navbar list-group-flush'>
      <li>
        {!isAdmin ? (
          <Link
            className='menu__item user-room__menu-item '
            to={`/userPage/${userId}/about`}
          >
            Все пользователи АДМИН
          </Link>
        ) : (
          <Link
            className='menu__item user-room__menu-item '
            to={`/userPage/${userId}/about`}
          >
            Пользователь НЕ Админ
          </Link>
        )}
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={`/userPage/${userId}/static`}
        >
          Статистика
        </Link>
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={`/userPage/${userId}/booking`}
        >
          Записи
        </Link>
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={`/userPage/${userId}/settings`}
        >
          Настройки
        </Link>
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={`/userPage/${userId}/edit`}
        >
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
