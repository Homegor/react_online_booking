import React from "react"
import NavUserProfile from "../../ui/nav/userProfile"
import { Outlet } from "react-router-dom"

const AdminPage = () => {
  return (
    <div className={"container"}>
      <h1>Личный кабинет</h1>
      <div className='user-room row'>
        <div className='col-sm user-room__bar m-2'>
          <NavUserProfile />
        </div>
        <div className='col-sm-8 user-room__bar m-2'>
          <Outlet />
          {/*          <div className={"d-flex justify-content-end"}>
            <ButtonsBooking className={"m-2"} name={"Редактировать"} />
          </div>*/}
        </div>
      </div>
    </div>
  )
}

export default AdminPage
