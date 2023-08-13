import React from "react"
import PropTypes from "prop-types"

const TextAreaField = ({ label, name, value, onChange, error }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className='form-floating'>
        <textarea
          className='form-control'
          id={name}
          value={value}
          onChange={handleChange}
          style='height: 100px'
        ></textarea>
        <label htmlFor='floatingTextarea2'>Comments</label>
      </div>
    </>
  )
}
TextAreaField.defaultProps = {
  type: "text"
}
TextAreaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}
export default TextAreaField
