import React from "react"
import NavUserProfile from "../../ui/nav/userProfile"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { getCurrentUserData } from "../../../store/slices/userSlice"
import Loader from "../../common/loader/loader"

const AdminPage = () => {
  const currentUser = useSelector(getCurrentUserData())

  if (currentUser) {
    return (
      <div className={"container"}>
        <h1>Личный кабинет</h1>
        <div className='user-room row'>
          <div className='col-sm user-room__bar m-2 p-2'>
            <NavUserProfile />
          </div>
          <div className='col-sm-8 user-room__bar m-2 p-2'>
            <Outlet />
          </div>
        </div>
      </div>
    )
  } else {
    return <Loader />
  }
}

export default AdminPage
