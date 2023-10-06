import React, { useState } from "react"
import PropTypes from "prop-types"
import TextAreaField from "../form/textAreaField"

const AddCommentsForm = ({ onSubmit }) => {
  const [data, setData] = useState({})
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const clearForm = () => {
    setData({})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(data)
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
