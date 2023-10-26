import React from "react"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import { useSelector } from "react-redux"
import { getServicesList } from "../../../store/slices/servicesSlice"
import Loader from "../loader/loader"
const PriseList = () => {
  const services = useSelector(getServicesList())

  const filterHaircut = services.filter(
    (x) => x.category === "6517dc564e155654cfe4f418"
  )
  const filterCosmetology = services.filter(
    (x) => x.category === "6517dc564e155654cfe4f419"
  )
  const filterNail = services.filter(
    (x) => x.category === "6517dc564e155654cfe4f41a"
  )
  const filterMakeup = services.filter(
    (x) => x.category === "6517dc564e155654cfe4f41b"
  )
  const filterBrows = services.filter(
    (x) => x.category === "6517dc564e155654cfe4f41c"
  )
  const filterMassage = services.filter(
    (x) => x.category === "6517dc564e155654cfe4f41d"
  )
  return (
    <>
      {services ? (
        <>
          <Tabs
            defaultActiveKey='nail'
            transition={false}
            id='noanim-tab-example'
            className='mb-3'
          >
            <Tab eventKey='haircut' title='Стрижка и укладка'>
              {filterHaircut.map((h) => (
                <div key={h._id} id='haircut' className='name name__active'>
                  <div className='name__box'>
                    <div className='name__left'>
                      <p className='name__title'>{h.name}</p>
                    </div>
                    <div className='name__right'>
                      <p className='name__price'>{h.prise} &#x20bd;</p>
                    </div>
                  </div>
                </div>
              ))}
            </Tab>
            <Tab
              className={"tabs__container"}
              eventKey='cosmetology'
              title='Косметология'
            >
              {filterCosmetology.map((h) => (
                <div key={h._id} id='haircut' className='name name__active'>
                  <div className='name__box'>
                    <div className='name__left'>
                      <p className='name__title'>{h.name}</p>
                    </div>
                    <div className='name__right'>
                      <p className='name__price'>{h.prise} &#x20bd;</p>
                    </div>
                  </div>
                </div>
              ))}
            </Tab>
            <Tab
              className={"tabs__container"}
              eventKey='nail'
              title='Маникюр и педикюр'
            >
              {filterNail.map((h) => (
                <div key={h._id} id='haircut' className='name name__active'>
                  <div className='name__box'>
                    <div className='name__left'>
                      <p className='name__title'>{h.name}</p>
                    </div>
                    <div className='name__right'>
                      <p className='name__price'>{h.prise} &#x20bd;</p>
                    </div>
                  </div>
                </div>
              ))}
            </Tab>
            <Tab className={"tabs__container"} eventKey='makeup' title='Макияж'>
              {filterMakeup.map((h) => (
                <div key={h._id} id='haircut' className='name name__active'>
                  <div className='name__box'>
                    <div className='name__left'>
                      <p className='name__title'>{h.name}</p>
                    </div>
                    <div className='name__right'>
                      <p className='name__price'>{h.prise} &#x20bd;</p>
                    </div>
                  </div>
                </div>
              ))}
            </Tab>
            <Tab
              className={"tabs__container"}
              eventKey='brows'
              title='Брови и ресницы'
            >
              {filterBrows.map((h) => (
                <div key={h._id} id='haircut' className='name name__active'>
                  <div className='name__box'>
                    <div className='name__left'>
                      <p className='name__title'>{h.name}</p>
                    </div>
                    <div className='name__right'>
                      <p className='name__price'>{h.prise} &#x20bd;</p>
                    </div>
                  </div>
                </div>
              ))}
            </Tab>
            <Tab
              className={"tabs__container"}
              eventKey='massage'
              title='Массаж'
            >
              {filterMassage.map((h) => (
                <div key={h._id} id='haircut' className='name name__active'>
                  <div className='name__box'>
                    <div className='name__left'>
                      <p className='name__title'>{h.name}</p>
                    </div>
                    <div className='name__right'>
                      <p className='name__price'>{h.prise} &#x20bd;</p>
                    </div>
                  </div>
                </div>
              ))}
            </Tab>
          </Tabs>
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default PriseList
