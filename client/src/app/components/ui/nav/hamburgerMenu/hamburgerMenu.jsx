import React from "react"
import NavBar from "./navBar"
import Button from "react-bootstrap/Button"
import Offcanvas from "react-bootstrap/Offcanvas"
import { Link } from "react-router-dom"
import useHamburgerMenu from "../../../../hooks/useHamburgerMenu"

const HamburgerMenu = () => {
  const { show, handleShow, handleClose } = useHamburgerMenu()

  return (
    <>
      <Button
        variant='primary'
        className={"btn-hamburger"}
        onClick={handleShow}
      >
        Меню
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className='menu__logo'>
              <div className='logo'>
                <Link to='/'>Мир красоты</Link>
              </div>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavBar onClick={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default HamburgerMenu
