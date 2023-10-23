import React from "react"
import { useSelector } from "react-redux"
import { getServicesList } from "../../../../store/slices/servicesSlice"

const StatisticsUserList = () => {
  const service = useSelector(getServicesList())
  console.log(service)
  return (
    <div>
      <p>Статистика пользователей</p>
    </div>
  )
}

export default StatisticsUserList
