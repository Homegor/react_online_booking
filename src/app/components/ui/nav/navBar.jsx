import React from "react"
import NavProfile from "./navProfile"
import ContactForMe from "./contactForMe"
import { Link } from "react-router-dom"

const NavBar = () => {
  const navLink = [
    { id: 0, name: "Главная", url: "/" },
    { id: 1, name: "Услуги", url: "/services" },
    { id: 2, name: "Ваши отзывы", url: "/comments" }
  ]

  return (
    <>
      <ul className='menu__box'>
        <div className='menu__logo'>
          <div className='logo'>
            <a href='#'>Мир красоты</a>
          </div>
        </div>
        <NavProfile />
        <li>
          {navLink.map((link) => (
            <Link key={link.id} className={"menu__item"} to={link.url}>
              {link.name}
            </Link>
          ))}
          <Link className={"menu__item"} to={"/login"}>
            Вход/Регистрация
          </Link>
        </li>

        <ContactForMe />
      </ul>
    </>
  )
}

export default NavBar
