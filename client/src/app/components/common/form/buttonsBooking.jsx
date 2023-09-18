import React from "react"
import PropTypes from "prop-types"

const ButtonsBooking = ({ className, name, onChange }) => {
  return <button className={"btn " + className}>{name}</button>
}

ButtonsBooking.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}
export default ButtonsBooking
