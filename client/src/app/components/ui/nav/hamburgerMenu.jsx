import React from "react"
import NavBar from "./navBar"

const HamburgerMenu = () => {
  return (
    <>
      <div className='hamburger-menu'>
        <input id='menu__toggle' type='checkbox' />
        <label className='menu__btn' htmlFor='menu__toggle'>
          <span></span>
        </label>
        <NavBar />
      </div>
    </>
  )
}

export default HamburgerMenu
