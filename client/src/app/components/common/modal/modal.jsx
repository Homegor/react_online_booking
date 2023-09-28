import React from "react"
import PropTypes from "prop-types"

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active === true ? "modal active" : "modal"}
      onClick={() => {
        setActive(false)
      }}
    >
      <div className={"modalContent"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  children: PropTypes.object
}
export default Modal
