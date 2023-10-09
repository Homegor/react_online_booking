import React from "react"
import { useSelector } from "react-redux"

import { getBookingList } from "../../../../store/slices/bookingSlice"
import { getMasters } from "../../../../store/slices/masterSlice"
import { getCategories } from "../../../../store/slices/categoriesSlice"

const SettingsUserList = () => {
  const getStatus = useSelector(getBookingList())
  const getMaster = useSelector(getMasters())
  const getCategori = useSelector(getCategories())

  console.log("Записи", getStatus)
  console.log("Мастера", getMaster)
  console.log("Категории", getCategori)

  return (
    <div>
      <p>Какие то настройки, правда еще не придумал какие</p>
    </div>
  )
}

export default SettingsUserList
