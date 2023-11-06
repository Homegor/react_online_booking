import React from "react"
import { Link } from "react-router-dom"
import { getCurrentUserData, logOut } from "../../../../store/slices/userSlice"
import { useDispatch, useSelector } from "react-redux"
import useHamburgerMenu from "../../../../hooks/useHamburgerMenu"
import PropTypes from "prop-types"

const NavProfile = ({ onClick }) => {
  const { toggleMenu, show } = useHamburgerMenu()
  const currentUser = useSelector(getCurrentUserData())

  const dispatch = useDispatch()

  const handleCloseProfile = () => {
    toggleMenu()
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
            <div className='dropdown' onClick={handleCloseProfile}>
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
                className={"dropdown-menu " + (show === true ? "show" : "")}
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <Link
                    className='dropdown-item'
                    onClick={onClick}
                    to={`/userPage/${currentUser._id}/about`}
                  >
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
NavProfile.propTypes = {
  onClick: PropTypes.bool
}
export default NavProfile
