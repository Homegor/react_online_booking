import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getCategories,
  getCategoriesLoading
} from "../../../../store/slices/categoriesSlice"
import SelectField from "../../../common/form/selectField"
import { Button } from "../../../common/form/button"
import TextField from "../../../common/form/textField"
import { createServices } from "../../../../store/slices/servicesSlice"
import Loader from "../../../common/loader/loader"
import { PriseAdminList } from "../../../common/prise"

const SettingsUserList = () => {
  const [data, setData] = useState({ category: "", name: "", prise: "" })
  const dispatch = useDispatch()
  const isLoading = useSelector(getCategoriesLoading())

  const category = useSelector(getCategories())
  const categoryList = category.map((c) => ({
    label: c.name,
    value: c._id
  }))

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const clearForm = () => {
    setData({ category: data.category, name: "", prise: "" })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createServices({ ...data }))
    clearForm()
  }

  return (
    <>
      {!isLoading ? (
        <>
          <h2>Настройки</h2>
          <form onSubmit={handleSubmit}>
            <SelectField
              name={"category"}
              label={"Выберете вид услуги"}
              value={data.category}
              onChange={handleChange}
              options={categoryList}
              defaultOption={"..."}
            />
            <TextField
              label={"Введите название услуги"}
              value={data.name}
              onChange={handleChange}
              name={"name"}
            />
            <TextField
              label={"Введите цену услуги"}
              value={data.prise}
              type={"number"}
              onChange={handleChange}
              name={"prise"}
            />
            <div className={"d-flex justify-content-end"}>
              <Button name={"Добавить"} className={"btn btn-primary"} />
            </div>
          </form>
          <hr />
          <h3 className={"text-center mt-2"}>Цены на услуги</h3>
          <div className={"mt-3"}>
            <PriseAdminList />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default SettingsUserList
