import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  getCurrentUserData,
  getCurrentUserId,
  logOut
} from "../../../../store/slices/userSlice"

const NavUserProfile = () => {
  const currentUserId = useSelector(getCurrentUserId())
  const currentUser = useSelector(getCurrentUserData())
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(logOut())
  }
  return (
    <ul className='list-group user-room__Navbar list-group-flush'>
      <li>
        <Link
          className='menu__item user-room__menu-item '
          to={`/userPage/${currentUserId}/about`}
        >
          <span className={"text-primary"}>{currentUser.name}</span>
        </Link>
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item '
          to={`/userPage/${currentUserId}/masters`}
        >
          Наши мастера
        </Link>
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={`/userPage/${currentUserId}/static`}
        >
          Статистика
        </Link>
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={`/userPage/${currentUserId}/booking`}
        >
          Записи
        </Link>
      </li>
      <li>
        <Link
          className='menu__item user-room__menu-item'
          to={`/userPage/${currentUserId}/settings`}
        >
          Настройки
        </Link>
        <Link
          className='menu__item user-room__menu-item'
          to={`/userPage/${currentUserId}/comments`}
        >
          Оставить отзыв
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
