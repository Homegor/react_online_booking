import React from "react"
import NavLogin from "../../ui/nav/navLogin"
import ButtonsBooking from "../../common/form/buttonsBooking"
import AboutUser from "../../../layouts/aboutUser"

const UserListPage = () => {
  return (
    <div className={"container"}>
      <h1>Личный кабинет</h1>
      <div className='user-room row'>
        <div className='col-sm user-room__bar m-2'>
          <NavLogin />
        </div>
        <div className='col-sm-8 user-room__bar m-2'>
          <div className='row user-info'>
            <AboutUser />
            {/*            <div className='col-6 col-md-4 user-room__request text-center p-2'>
              <p>Фамилия/Имя</p>
            </div>
            <div className='col-12 col-md-8 user-room__info text-center p-2'>
              <p>Черняк Анна</p>
            </div>
            <div className='col-6 col-md-4 user-room__request text-center p-2'>
              <p>Пол</p>
            </div>
            <div className='col-12 col-md-8 text-center p-2'>
              <p>Женский</p>
            </div>
            <div className='col-6 col-md-4 user-room__request text-center p-2'>
              <p>Возраст</p>
            </div>
            <div className='col-12 col-md-8 text-center p-2'>
              <p>31 год</p>
            </div>
            <div className='col-6 col-md-4 user-room__request text-center p-2'>
              <p>Номер телефона</p>
            </div>
            <div className='col-12 col-md-8 text-center p-2'>
              <p>+7 (999) 999-99-99</p>
            </div>
            <div className='col-6 col-md-4 user-room__request text-center p-2'>
              <p>Телеграм</p>
            </div>
            <div className='col-12 col-md-8 text-center p-2'>
              <p>Ссылка на телеграм</p>
            </div>*/}
          </div>
          <div className={"d-flex justify-content-end"}>
            <ButtonsBooking className={"m-2"} name={"Редактировать"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserListPage
