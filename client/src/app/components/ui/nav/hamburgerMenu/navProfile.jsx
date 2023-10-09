import React, { useState } from "react"
import { Link } from "react-router-dom"
import { getCurrentUserData, logOut } from "../../../../store/slices/userSlice"
import { useDispatch, useSelector } from "react-redux"

const NavProfile = () => {
  const [isOpen, setOpen] = useState(false)
  const currentUser = useSelector(getCurrentUserData())
  const dispatch = useDispatch()

  const toggleMenu = () => {
    setOpen((prevState) => !prevState)
  }
  const handleLogOut = () => {
    dispatch(logOut())
  }

  return (
    <>
      {currentUser && (
        <div className='information'>
          <div className='information__top'>
            <div className='round'>
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${(
                  Math.random() + 1
                )
                  .toString(36)
                  .substring(7)}.svg`}
                alt=''
              />
            </div>
            <div className='dropdown' onClick={toggleMenu}>
              <button
                className={"btn-dropdown dropdown-toggle"}
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {currentUser.name}
              </button>
              <ul
                className={"dropdown-menu " + (isOpen === true ? "show" : "")}
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <Link className='dropdown-item' to={`/userPage`}>
                    Профиль
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' onClick={handleLogOut} to='/'>
                    Выйти
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NavProfile
