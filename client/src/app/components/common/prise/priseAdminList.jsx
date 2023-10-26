import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getServicesList,
  getServicesLoadingStatus,
  removeServices
} from "../../../store/slices/servicesSlice"
import Loader from "../loader/loader"
import Accordion from "react-bootstrap/Accordion"

const PriseAdminList = () => {
  const services = useSelector(getServicesList())
  const dispatch = useDispatch()
  const isLoading = useSelector(getServicesLoadingStatus())

  const handleRemoveBooking = (id) => {
    dispatch(removeServices(id))
  }

  const filterHaircut = services.filter(
    (s) => s.category === "6517dc564e155654cfe4f418"
  )
  const filterCosmetology = services.filter(
    (s) => s.category === "6517dc564e155654cfe4f419"
  )
  const filterNail = services.filter(
    (s) => s.category === "6517dc564e155654cfe4f41a"
  )
  const filterMakeup = services.filter(
    (s) => s.category === "6517dc564e155654cfe4f41b"
  )
  const filterBrows = services.filter(
    (s) => s.category === "6517dc564e155654cfe4f41c"
  )
  const filterMassage = services.filter(
    (s) => s.category === "6517dc564e155654cfe4f41d"
  )
  return (
    <>
      {!isLoading ? (
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Стрижка и укладка</Accordion.Header>
            <Accordion.Body>
              <div className={"booking"}>
                {filterHaircut.map((h) => (
                  <div key={h._id} className={"booking__info"}>
                    <p>
                      Название:
                      <span className={"booking__userInfo"}>{h.name}</span>
                    </p>
                    <p>
                      Цена:
                      <span className={"booking__userInfo"}>
                        {h.prise} &#x20bd;
                      </span>
                    </p>
                    <div className='booking__click'>
                      <button
                        onClick={() => handleRemoveBooking(h._id)}
                        className={"btn booking__btn mt-3"}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='1'>
            <Accordion.Header>Косметология</Accordion.Header>
            <Accordion.Body>
              <div className={"booking"}>
                {filterCosmetology.map((h) => (
                  <div key={h._id} className={"booking__info"}>
                    <p>
                      Название:
                      <span className={"booking__userInfo"}>{h.name}</span>
                    </p>
                    <p>
                      Цена:
                      <span className={"booking__userInfo"}>
                        {h.prise} &#x20bd;
                      </span>
                    </p>
                    <div className='booking__click'>
                      <button
                        onClick={() => handleRemoveBooking(h._id)}
                        className={"btn booking__btn mt-3"}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>Маникюр и педикюр</Accordion.Header>
            <Accordion.Body>
              <div className={"booking"}>
                {filterNail.map((h) => (
                  <div key={h._id} className={"booking__info"}>
                    <p>
                      Название:
                      <span className={"booking__userInfo"}>{h.name}</span>
                    </p>
                    <p>
                      Цена:
                      <span className={"booking__userInfo"}>
                        {h.prise} &#x20bd;
                      </span>
                    </p>
                    <div className='booking__click'>
                      <button
                        onClick={() => handleRemoveBooking(h._id)}
                        className={"btn booking__btn mt-3"}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>Макияж</Accordion.Header>
            <Accordion.Body>
              <div className={"booking"}>
                {filterMakeup.map((h) => (
                  <div key={h._id} className={"booking__info"}>
                    <p>
                      Название:
                      <span className={"booking__userInfo"}>{h.name}</span>
                    </p>
                    <p>
                      Цена:
                      <span className={"booking__userInfo"}>
                        {h.prise} &#x20bd;
                      </span>
                    </p>
                    <div className='booking__click'>
                      <button
                        onClick={() => handleRemoveBooking(h._id)}
                        className={"btn booking__btn mt-3"}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='4'>
            <Accordion.Header>Брови и ресницы</Accordion.Header>
            <Accordion.Body>
              <div className={"booking"}>
                {filterBrows.map((h) => (
                  <div key={h._id} className={"booking__info"}>
                    <p>
                      Название:
                      <span className={"booking__userInfo"}>{h.name}</span>
                    </p>
                    <p>
                      Цена:
                      <span className={"booking__userInfo"}>
                        {h.prise} &#x20bd;
                      </span>
                    </p>
                    <div className='booking__click'>
                      <button
                        onClick={() => handleRemoveBooking(h._id)}
                        className={"btn booking__btn mt-3"}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='5'>
            <Accordion.Header>Массаж</Accordion.Header>
            <Accordion.Body>
              <div className={"booking"}>
                {filterMassage.map((h) => (
                  <div key={h._id} className={"booking__info"}>
                    <p>
                      Название:
                      <span className={"booking__userInfo"}>{h.name}</span>
                    </p>
                    <p>
                      Цена:
                      <span className={"booking__userInfo"}>
                        {h.prise} &#x20bd;
                      </span>
                    </p>
                    <div className='booking__click'>
                      <button
                        onClick={() => handleRemoveBooking(h._id)}
                        className={"btn booking__btn mt-3"}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default PriseAdminList
