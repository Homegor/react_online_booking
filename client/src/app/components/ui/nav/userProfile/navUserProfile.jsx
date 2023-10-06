import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUserData, logOut } from "../../../../store/slices/userSlice"

const NavUserProfile = () => {
  const currentUser = useSelector(getCurrentUserData())
  const dispatch = useDispatch()

  const isAdmin = false

  const handleLogOut = () => {
    dispatch(logOut())
  }
  return (
    <ul className='list-group user-room__Navbar list-group-flush'>
      <li>
        {!isAdmin ? (
          <Link
            className='menu__item user-room__menu-item '
            to={`/userPage/${currentUser}/about`}
          >
            Все пользователи АДМИН
          </Link>
        ) : (
          <Link
            className='menu__item user-room__menu-item '
            to={`/userPage/${currentUser}/about`}
          >
            Пользователь НЕ Админ
          </Link>
        )}
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={`/userPage/${currentUser}/static`}
        >
          Статистика
        </Link>
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={`/userPage/${currentUser}/booking`}
        >
          Записи
        </Link>
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={`/userPage/${currentUser}/settings`}
        >
          Настройки
        </Link>
        <Link
          className='menu__item user-room__menu-item'
          to={`/userPage/${currentUser}/comments`}
        >
          Оставить отзыв
        </Link>
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={`/userPage/${currentUser}/edit`}
        >
          Редактировать
        </Link>
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          onClick={handleLogOut}
          to={"/"}
        >
          Выйти
        </Link>
      </li>
    </ul>
  )
}

export default NavUserProfile
