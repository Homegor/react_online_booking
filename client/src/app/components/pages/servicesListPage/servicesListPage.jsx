import React, { useState } from "react"
import SelectField from "../../common/form/selectField"
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../../../store/slices/categoriesSlice"
import { getMasters } from "../../../store/slices/masterSlice"
import TextField from "../../common/form/textField"
import { Button } from "../../common/form/button"
import { createBooking } from "../../../store/slices/bookingSlice"

const ServicesListPage = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    masters: "",
    services: ""
  })
  const dispatch = useDispatch()

  const category = useSelector(getCategories())
  const categoryList = category.map((c) => ({
    label: c.name,
    value: c.name
  }))

  const masters = useSelector(getMasters())
  const mastersList = masters.map((m) => ({
    label: m.name,
    value: m.name
  }))

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createBooking({ ...data }))
  }
  return (
    <>
      <section>
        <h1 className={"text-center"}>Онлайн запись</h1>
        <hr />

        <form onSubmit={handleSubmit}>
          <h1>Все услуги</h1>
          <SelectField
            name={"services"}
            label={"Выберете вид услуги"}
            value={data.services}
            options={categoryList}
            onChange={handleChange}
            defaultOption={"..."}
          />
          <hr />
          <h2>Наши Мастера</h2>
          <SelectField
            name={"masters"}
            value={data.masters}
            options={mastersList}
            onChange={handleChange}
            defaultOption={"..."}
          />
          <hr />
          <h2>Информация о вас</h2>
          <div className={"d-flex flex-wrap"}>
            <div className={"div-input m-2"}>
              <TextField
                name={"name"}
                value={data.name}
                label={"Имя"}
                onChange={handleChange}
              />
            </div>
            <div className={"div-input m-2"}>
              <TextField
                name={"phone"}
                value={data.phone}
                label={"Телефон"}
                onChange={handleChange}
              />
            </div>
          </div>
          <hr />

          <div className={"d-flex justify-content-end"}>
            <Button name={"Добавить"} className={"btn btn-primary"} />
          </div>
        </form>
      </section>
    </>
  )
}

export default ServicesListPage
