import React from "react"
import PropTypes from "prop-types"

const Button = ({ name, className }) => {
  const classBtn = "btn"
  return <button className={classBtn + className}>{name}</button>
}

Button.propType = {
  name: PropTypes.string,
  className: PropTypes.string
}
export default Button
