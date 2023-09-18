import React, { useState } from "react"
import TextAreaField from "../form/textAreaField"
import { validator } from "../../../utils/validator"
import PropTypes from "prop-types"

const AddCommentsForm = ({ onSubmit }) => {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})

  console.log(data)
  const validatorConfig = {
    content: {
      isRequired: {
        message: "Сообщение не может быть пустым"
      }
    }
  }
  const validate = () => {
    const errors = validator(data, validatorConfig)

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const clearForm = () => {
    setData({})
    setErrors({})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    // onSubmit(data)
    clearForm()
  }
  return (
    <div>
      <h2>Оставляйте свой комментарий</h2>
      <form onSubmit={handleSubmit}>
        <TextAreaField
          value={data.content || ""}
          onChange={handleChange}
          name='content'
          label='Отзыв'
          error={errors.content}
        />
        <div className='d-flex justify-content-end'>
          <button className='btn btn-primary'>Опубликовать</button>
        </div>
      </form>
    </div>
  )
}
AddCommentsForm.propTypes = {
  onSubmit: PropTypes.func
}
export default AddCommentsForm
