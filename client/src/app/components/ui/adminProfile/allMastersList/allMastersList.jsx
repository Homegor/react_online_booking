import React from "react"
import { useSelector } from "react-redux"
import Loader from "../../../common/loader/loader"
import {
  getMasters,
  getMastersLoading
} from "../../../../store/slices/masterSlice"

const AllMastersList = () => {
  const isLoading = useSelector(getMastersLoading())
  const mastersList = useSelector(getMasters())

  return (
    <div>
      <h2>Наши мастера</h2>
      {!isLoading ? (
        <div className='master'>
          {mastersList.map((u) => (
            <div key={u._id} className={"master__masterInfo"}>
              <div className={"master__img"}>
                <img src={u.image} alt={u.name} />
              </div>
              <div className={"master__cart"}>
                <p>
                  Имя: <span>{u.name}</span>
                </p>
                <p>
                  Email: <span>{u.email}</span>
                </p>
                <p>
                  Телефон:
                  <span>{u.phone}</span>
                </p>
                <p>
                  Должность:
                  <span>{u.service}</span>
                </p>
                <p>
                  Опыт:
                  <span>{u.experience} лет</span>
                </p>
                <p>
                  День рождения:
                  <span>{u.birthdate}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default AllMastersList
