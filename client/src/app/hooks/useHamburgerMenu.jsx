import { useState } from "react"

const UseHamburgerMenu = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  const toggleMenu = () => {
    setShow((prevState) => !prevState)
  }
  const handleShow = () => setShow(true)

  return { show, handleClose, handleShow, toggleMenu }
}

export default UseHamburgerMenu
