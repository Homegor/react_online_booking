import React, { useState } from "react"
import { Link } from "react-router-dom"

const NavProfile = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen((prevState) => !prevState)
  }
  return (
    <>
      <div className='information'>
        <div className='information__top'>
          <div className='round'>
            <img
              src={`https://avatars.dicebear.com/api/adventurer/${(
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
              ФИО
            </button>
            <ul
              className={"dropdown-menu " + (isOpen ? "show" : "")}
              aria-labelledby='dropdownMenuButton1'
            >
              <li>
                <Link className='dropdown-item' to='/userpage'>
                  Профиль
                </Link>
              </li>
              <li>
                <Link className='dropdown-item' to='#'>
                  Выйти
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavProfile
