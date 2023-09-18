import React, { useState } from "react"
import PropTypes from "prop-types"

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }
  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "")
  }
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className='input-group has-validation mb-3'>
        <input
          className={getInputClasses()}
          value={value}
          type={showPassword ? "text" : type}
          name={name}
          onChange={handleChange}
        />
        {type === "password" && (
          <button
            className='btn btn-outline-secondary'
            type='button'
            onClick={toggleShowPassword}
          >
            Показать
          </button>
        )}
        {error && <div className={"invalid-feedback"}>{error}</div>}
      </div>
    </>
  )
}

TextField.defaultProps = {
  type: "text"
}
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}
export default TextField
