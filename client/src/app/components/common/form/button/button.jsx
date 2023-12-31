import React from "react"
import PropTypes from "prop-types"

const Button = ({ name, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {name}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}
export default Button
