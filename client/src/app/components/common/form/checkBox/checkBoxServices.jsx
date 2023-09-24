import React from "react"
import PropTypes from "prop-types"

const CheckBoxServices = ({ src, name, id, value, onChange, children }) => {
  const handleChange = () => {
    // eslint-disable-next-line
    onChange({ name: name, value: !value })
  }
  return (
    <>
      <input
        type='checkbox'
        value={""}
        checked={value}
        id={id}
        onChange={handleChange}
      />
      <label htmlFor={id}>
        <img src={src} alt={name} />
        {children}
      </label>
    </>
  )
}

CheckBoxServices.propTypes = {
  src: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default CheckBoxServices
