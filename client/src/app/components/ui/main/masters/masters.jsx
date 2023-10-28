import React from "react"

import { useSelector } from "react-redux"
import {
  getMasters,
  getMastersLoading
} from "../../../../store/slices/masterSlice"
import Loader from "../../../common/loader/loader"

const Masters = () => {
  const isLoading = useSelector(getMastersLoading())
  const mastersList = useSelector(getMasters())

  return (
    <section className={"mw full"}>
      {!isLoading ? (
        <div className='masters'>
          <div className='master__container'>
            <div className='masters__header'>
              <p className='masters__title title'>Мастера</p>
              <p className='masters__subtitle'>
                Дружная команда настоящих профессионалов
              </p>
            </div>
            <div className='masters__info'>
              {mastersList.map((u) => (
                <div key={u._id} className='masters__container'>
                  <div className='masters__box'>
                    <img className='masters__img' src={u.image} alt='alt' />
                  </div>
                  <div className='masters__name'>
                    <p className='masters__fest-name'>{u.name}</p>
                    <p className='masters__specialties'>
                      {u.service.toUpperCase()}
                    </p>
                    <p className='masters__experience'>
                      опыт работы {u.experience} лет
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  )
}

export default Masters
